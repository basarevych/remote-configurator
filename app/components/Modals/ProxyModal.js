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
import fields from "../../../common/forms/proxy";

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

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    props.onFinish(
      props.getValue("host"),
      props.getValue("port"),
      !!props.getValue("isAuthNeeded"),
      props.getValue("login"),
      props.getValue("password")
    );
    props.onClose();

    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      if (!nextProps.getValue("host"))
        nextProps.dispatch(nextProps.change("host", "localhost"));
      if (!nextProps.getValue("port"))
        nextProps.dispatch(nextProps.change("port", "80"));
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
      <Dialog
        maxWidth="xs"
        open={this.props.isOpen}
        onClose={this.props.onCancel}
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
            onSubmit={this.submit}
          >
            <Grid item xs={12}>
              <Field name="host" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field name="port" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="isAuthNeeded"
                type="checkbox"
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="login"
                type="text"
                disabled={!this.props.getValue("isAuthNeeded")}
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                type="password"
                disabled={!this.props.getValue("isAuthNeeded")}
                onSubmit={this.submit}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.submitting}
            onClick={this.props.onCancel}
          >
            <FormattedMessage id="PROXY_MODAL_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="PROXY_MODAL_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProxyModal);
