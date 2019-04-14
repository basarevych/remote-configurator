import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { NextQueryRenderer } from "../app/providers/Relay";
import { Form, Field } from "../app/forms";
import fieldsEdit from "../../common/forms/editDevice";
import fieldsCreate from "../../common/forms/createDevice";

export const styles = () => ({
  error: {
    color: red[500]
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

export const query = graphql`
  query EditDeviceModalQuery($currentId: ID) {
    viewer {
      device(id: $currentId) {
        id
        name
      }
    }
  }
`;

class EditDeviceModal extends Form {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    currentId: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      initialValues: null
    };

    this.submit = this.submit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isOpen && prevProps.isOpen)
      this.setState({ initialValues: null });
  }

  async submit({ name, password }) {
    let result;

    if (this.props.currentId)
      result = await this.props.onEdit(this.props.currentId, name, password);
    else result = await this.props.onCreate(name, password);

    return result === true ? {} : result;
  }

  renderForm() {
    return (
      <Form
        fields={this.props.currentId ? fieldsEdit : fieldsCreate}
        initialValues={this.state.initialValues}
        onSubmit={this.submit}
        render={({ submitting, submitError, handleSubmit }) => (
          <Dialog
            maxWidth="xs"
            classes={{ paper: this.props.classes.paper }}
            open
            onClose={this.props.onCancel}
          >
            <DialogTitle>
              <FormattedMessage
                id={
                  this.props.currentId
                    ? "EDIT_DEVICE_TITLE_EDIT"
                    : "EDIT_DEVICE_TITLE_CREATE"
                }
              />
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
                  <Field name="name" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Field name="password" type="password" />
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
                <FormattedMessage id="EDIT_DEVICE_CANCEL" />
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disabled={submitting}
                onClick={handleSubmit}
              >
                <FormattedMessage id="EDIT_DEVICE_SUBMIT" />
              </Button>
            </DialogActions>
          </Dialog>
        )}
      />
    );
  }

  async loadData(viewer) {
    await new Promise(resolve => setTimeout(resolve));
    if (this.state.initialValues) return;

    this.setState({
      initialValues: {
        name: _.get(viewer, "device.name", ""),
        password: _.get(viewer, "device.password", "")
      }
    });
  }

  render() {
    if (!this.props.isOpen) return null;
    if (!this.props.currentId) return this.renderForm();

    return (
      <NextQueryRenderer
        query={query}
        variables={{ currentId: this.props.currentId }}
        render={({ error, props }) => {
          if (error || !props) return null;
          this.loadData(props.viewer);
          return this.renderForm();
        }}
      />
    );
  }
}

export default EditDeviceModal;
