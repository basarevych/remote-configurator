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

    if (result && _.isObject(result)) {
      let errors = {};
      for (let field of _.keys(result)) {
        errors[field] = [];
        for (let message of result[field]) errors[field].push({ id: message });
      }

      throw new SubmissionError(errors);
    }

    return result;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("password", ""));
      nextProps.dispatch(nextProps.clearAsyncError("_"));
      state.isOpen = nextProps.isOpen;
      state.errors = null;
    }

    if (nextProps.error && nextProps.error.has("_"))
      state.errors = nextProps.error.get("_");

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      errors: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    this.setState({ errors: null });
    if (!(await super.submit()) && !this.state.errors)
      this.setState({ errors: ["APP_AUTH_FAILED"] });
  }

  render() {
    return (
      <Dialog maxWidth="xs" fullWidth open={this.props.isOpen} onClose={_.noop}>
        <DialogTitle>
          <FormattedMessage id="APP_AUTH_TITLE" />
        </DialogTitle>
        {this.state.errors && (
          <DialogContent>
            {_.map(this.state.errors, (error, index) => (
              <DialogContentText
                key={`error-${index}`}
                classes={{ root: this.props.classes.error }}
              >
                <FormattedMessage id={error} />
              </DialogContentText>
            ))}
          </DialogContent>
        )}
        <DialogContent>
          <Grid
            container
            spacing={16}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="login"
                type="text"
                onSubmit={this.handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="password"
                type="password"
                onSubmit={this.handleSubmit}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="APP_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppAuthModal);
