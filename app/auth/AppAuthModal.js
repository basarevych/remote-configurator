import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { SubmissionError } from "redux-form/immutable";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import fields from "../../common/forms/auth";

export const styles = theme => ({
  title: {
    display: "block",
    fontWeight: "bold"
  },
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
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isSelfRegistrationEnabled: PropTypes.bool.isRequired,
    onSignIn: PropTypes.func.isRequired
  };

  static formName = "signInForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    let result = await props.onSignIn(
      props.getValue("login"),
      props.getValue("password")
    );

    if (result && _.isObject(result)) throw new SubmissionError(result);

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

    this.state = {};
  }

  render() {
    return (
      <Dialog maxWidth="xs" open={this.props.isOpen} onClose={_.noop}>
        <DialogTitle>
          <FormattedMessage id="APP_AUTH_TITLE" />
        </DialogTitle>
        {this.props.isSelfRegistrationEnabled && (
          <DialogContent>
            <DialogContentText>
              <span className={this.props.classes.title}>
                <FormattedMessage id="APP_AUTH_SELF_REGISTRATION_TITLE" />
              </span>
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
              <Field name="login" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" type="password" onSubmit={this.submit} />
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

export default AppAuthModal;
