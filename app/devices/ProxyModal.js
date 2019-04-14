import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Form, Field } from "../app/forms";
import fields from "../../common/forms/proxy";

export const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class ProxyModal extends React.Component {
  static propTypes = {
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit({ host, port, isAuthNeeded, login, password }) {
    let result = await this.props.onFinish(
      host,
      port,
      isAuthNeeded,
      login,
      password
    );
    if (result === true) {
      this.props.onCancel();
      return {};
    }
    return result;
  }

  render() {
    if (!this.props.isOpen) return null;

    return (
      <Form
        fields={fields}
        initialValues={{ host: "localhost", port: "80" }}
        onSubmit={this.submit}
        render={({ values, submitting, submitError, handleSubmit }) => (
          <Dialog maxWidth="xs" open onClose={this.props.onCancel}>
            <DialogTitle>
              <FormattedMessage id="PROXY_MODAL_TITLE" />: {this.props.name}
            </DialogTitle>
            {!!submitError && (
              <DialogContent>
                {_.map(
                  _.isArray(submitError) ? submitError : [submitError],
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
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Field name="host" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field name="port" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field name="isAuthNeeded" type="checkbox" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="login"
                    type="text"
                    disabled={!values.isAuthNeeded}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type="password"
                    disabled={!values.isAuthNeeded}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions classes={{ root: this.props.classes.actions }}>
              <Button
                variant="contained"
                color="primary"
                disabled={submitting}
                onClick={this.props.onCancel}
              >
                <FormattedMessage id="PROXY_MODAL_CANCEL" />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={submitting}
                onClick={handleSubmit}
              >
                <FormattedMessage id="PROXY_MODAL_SUBMIT" />
              </Button>
            </DialogActions>
          </Dialog>
        )}
      />
    );
  }
}

export default ProxyModal;
