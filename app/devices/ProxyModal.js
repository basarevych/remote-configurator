import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import fields from "../../common/forms/proxy";

export const styles = () => ({
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
    classes: PropTypes.object.isRequired,
    name: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  static formName = "proxyForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    props.onFinish(
      props.getValue("host"),
      props.getValue("port"),
      props.getValue("isAuthNeeded"),
      props.getValue("login"),
      props.getValue("password")
    );
    props.onCancel();

    return true;
  }

  componentDidMount() {
    this.props.dispatch(this.props.change("host", "localhost"));
    this.props.dispatch(this.props.change("port", "80"));
    this.props.dispatch(this.props.change("isAuthNeeded", false));
    this.props.dispatch(this.props.change("login", ""));
    this.props.dispatch(this.props.change("password", ""));
    this.props.dispatch(this.props.clearAsyncError());
    this.props.dispatch(this.props.clearSubmitErrors());
  }

  render() {
    return (
      <Dialog maxWidth="xs" open onClose={this.props.onCancel}>
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

export default ProxyModal;
