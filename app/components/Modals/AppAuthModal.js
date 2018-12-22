import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { SubmissionError } from "redux-form/immutable";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form from "../Forms/Form";
import Field from "../Forms/Field";

const styles = theme => ({
  error: theme.main.error,
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class AppAuthModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isSelfRegistrationEnabled: PropTypes.bool.isRequired,
    onSignIn: PropTypes.func.isRequired
  };

  static formName = "signInForm";

  static fields = {
    login: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      validate: "required",
      label: "APP_AUTH_LOGIN_LABEL"
    },
    password: {
      validate: "required",
      label: "APP_AUTH_PASSWORD_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    let result = await props.onSignIn(
      this.getValue(props, "login"),
      this.getValue(props, "password")
    );

    if (result === true) await props.onLoad();
    else if (result && _.isObject(result)) throw new SubmissionError(result);

    return result;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("password", ""));
      nextProps.dispatch(nextProps.clearAsyncError());
      nextProps.dispatch(nextProps.clearSubmitErrors());
      state.isOpen = nextProps.isOpen;
    }

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };

    this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <Dialog maxWidth="xs" fullWidth open={this.props.isOpen} onClose={_.noop}>
        <DialogTitle>
          <FormattedMessage id="APP_AUTH_TITLE" />
        </DialogTitle>
        {this.props.isSelfRegistrationEnabled && (
          <DialogContent>
            <DialogContentText>
              <Typography variant="subtitle1">
                <FormattedMessage id="APP_AUTH_SELF_REGISTRATION_TITLE" />
              </Typography>
              <FormattedMessage id="APP_AUTH_SELF_REGISTRATION_MESSAGE" />
            </DialogContentText>
          </DialogContent>
        )}
        {this.props.error && (
          <DialogContent>
            {_.map(
              _.isArray(this.props.error)
                ? this.props.error
                : [this.props.error],
              (error, index) => (
                <DialogContentText
                  key={`error-${index}`}
                  classes={{ root: this.props.classes.error }}
                >
                  {_.isArray(error) ? (
                    <FormattedMessage id={error[0]} values={error[1]} />
                  ) : (
                    <FormattedMessage id={error} />
                  )}
                </DialogContentText>
              )
            )}
          </DialogContent>
        )}
        <DialogContent>
          <Grid
            container
            spacing={16}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.submit}
          >
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="login"
                type="text"
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="password"
                type="password"
                onSubmit={this.submit}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="APP_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppAuthModal);
