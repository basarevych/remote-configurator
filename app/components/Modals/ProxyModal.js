import React from "react";
import PropTypes from "prop-types";
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

class ProxyModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  static formName = "proxyForm";

  static fields = {
    host: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "PROXY_HOST_LABEL"
    },
    port: {
      normalize: "rows:1|integer",
      transform: "trim",
      label: "PROXY_PORT_LABEL"
    },
    isAuthNeeded: {
      label: "PROXY_AUTH_LABEL"
    },
    login: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "PROXY_LOGIN_LABEL"
    },
    password: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "PROXY_PASSWORD_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    props.onFinish(
      this.getValue(props, "host"),
      this.getValue(props, "port"),
      this.getValue(props, "isAuthNeeded") === "on",
      this.getValue(props, "login"),
      this.getValue(props, "password")
    );
    props.onClose();

    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      if (!ProxyModal.getValue(nextProps, "host"))
        nextProps.dispatch(nextProps.change("host", "localhost"));
      if (!ProxyModal.getValue(nextProps, "port"))
        nextProps.dispatch(nextProps.change("port", "80"));
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
    this.props.onClose();
  }

  async handleSubmit() {
    return super.submit();
  }

  render() {
    return (
      <Dialog
        maxWidth="xs"
        fullWidth
        open={this.props.isOpen}
        onClose={this.handleCancel}
      >
        <DialogTitle>
          <FormattedMessage id="PROXY_MODAL_TITLE" />: {this.props.name}
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
                name="host"
                type="text"
                onSubmit={this.handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="port"
                type="text"
                onSubmit={this.handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="isAuthNeeded"
                type="checkbox"
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="login"
                type="text"
                disabled={
                  this.constructor.getValue(this.props, "isAuthNeeded") !== "on"
                }
                onSubmit={this.handleSubmit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="password"
                type="password"
                disabled={
                  this.constructor.getValue(this.props, "isAuthNeeded") !== "on"
                }
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
            <FormattedMessage id="PROXY_MODAL_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="PROXY_MODAL_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProxyModal);
