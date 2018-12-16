import React from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import { intlShape, FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "../Forms/Form";
import Field from "../Forms/Field";

const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class CredentialsModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    data: PropTypes.instanceOf(Map).isRequired,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  static formName = "credentialsAuthForm";

  static fields = {
    login: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "SETUP_AUTH_LOGIN_LABEL"
    },
    password: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "SETUP_AUTH_PASSWORD_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    props.onFinish(
      this.getValue(props, "login"),
      this.getValue(props, "password")
    );

    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("login", "root"));
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

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleCancel() {
    this.props.onCancel();
  }

  async handleSubmit() {
    return super.submit();
  }

  render() {
    return (
      <Dialog maxWidth="xs" fullWidth open={this.props.isOpen} onClose={_.noop}>
        <DialogTitle>
          <FormattedMessage id="SETUP_AUTH_TITLE" />: {this.props.name}
        </DialogTitle>
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
            color="primary"
            disabled={this.props.submitting}
            onClick={this.handleCancel}
          >
            <FormattedMessage id="SETUP_AUTH_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="SETUP_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CredentialsModal);
