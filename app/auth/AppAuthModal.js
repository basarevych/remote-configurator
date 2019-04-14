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

class AppAuthModal extends React.Component {
  static propTypes = {
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isSelfRegistrationEnabled: PropTypes.bool.isRequired,
    onSignIn: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit({ login, password }) {
    let result = await this.props.onSignIn(login, password);
    return result === true ? {} : result;
  }

  render() {
    if (!this.props.isOpen) return null;

    return (
      <Form
        fields={fields}
        onSubmit={this.submit}
        render={({ submitting, submitError, handleSubmit }) => (
          <Dialog maxWidth="xs" open onClose={_.noop}>
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
                  <Field name="login" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field name="password" type="password" />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions classes={{ root: this.props.classes.actions }}>
              <Button
                variant="contained"
                color="secondary"
                disabled={submitting}
                onClick={handleSubmit}
              >
                <FormattedMessage id="APP_AUTH_SUBMIT" />
              </Button>
            </DialogActions>
          </Dialog>
        )}
      />
    );
  }
}

export default AppAuthModal;
