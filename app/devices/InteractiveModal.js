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
import fields from "../../common/forms/interactive";

export const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class InteractiveModal extends React.Component {
  static propTypes = {
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    data: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit({ reply }) {
    let result = await this.props.onFinish(reply);
    return result === true ? {} : result;
  }

  render() {
    if (!this.props.isOpen) return null;
    let prompts = this.props.data.prompts || [];

    return (
      <Form
        fields={fields}
        onSubmit={this.submit}
        render={({ submitting, submitError, handleSubmit }) => (
          <Dialog maxWidth="xs" open onClose={this.props.onCancel}>
            <DialogTitle>
              <FormattedMessage id="KEYBOARD_AUTH_TITLE" />: {this.props.name}
            </DialogTitle>
            {this.props.data.banner && (
              <DialogContent>
                <DialogContentText>{this.props.data.banner}</DialogContentText>
              </DialogContent>
            )}
            <DialogContent>
              {_.map(prompts, (item, index) => (
                <DialogContentText key={`error-${index}`}>
                  {item.prompt}
                </DialogContentText>
              ))}
            </DialogContent>
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
                  <Field name="reply" type="password" />
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
                <FormattedMessage id="KEYBOARD_AUTH_CANCEL" />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={submitting}
                onClick={handleSubmit}
              >
                <FormattedMessage id="KEYBOARD_AUTH_SUBMIT" />
              </Button>
            </DialogActions>
          </Dialog>
        )}
      />
    );
  }
}

export default InteractiveModal;
