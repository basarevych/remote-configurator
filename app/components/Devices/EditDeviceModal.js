import React from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
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

class EditCameraModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    data: PropTypes.instanceOf(Map),
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  static formName = "editCameraForm";

  static fields = {
    name: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "EDIT_DEVICE_NAME_LABEL"
    },
    password: {
      normalize: "rows:1",
      transform: "trim",
      label: "EDIT_DEVICE_PASSWORD_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    let result;

    if (props.data) {
      result = await props.onEdit(
        props.data.get("id"),
        this.getValue(props, "name"),
        this.getValue(props, "password")
      );
    } else {
      result = await props.onCreate(
        this.getValue(props, "name"),
        this.getValue(props, "password")
      );
    }

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

    /* eslint-disable lodash/prefer-lodash-method */
    if (prevState.isOpen !== nextProps.isOpen) {
      let name = nextProps.data && nextProps.data.get("name");
      let password = nextProps.data && nextProps.data.get("password");
      nextProps.dispatch(nextProps.change("name", name || ""));
      nextProps.dispatch(nextProps.change("password", password || ""));
      nextProps.dispatch(nextProps.clearAsyncError("_"));
      state.isOpen = nextProps.isOpen;
      state.errors = null;
    }
    /* eslint-enable */

    if (nextProps.error && nextProps.error.has("_"))
      state.errors = nextProps.error.get("_");
    else if (!nextProps.error || !nextProps.error.has("_")) state.errors = null;

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
      this.setState({ errors: ["EDIT_DEVICE_FAILED"] });
  }

  render() {
    return (
      <Dialog
        maxWidth="xs"
        fullWidth
        open={this.props.isOpen}
        onClose={this.props.onCancel}
      >
        <DialogTitle>
          <FormattedMessage
            id={
              this.props.data
                ? "EDIT_DEVICE_TITLE_EDIT"
                : "EDIT_DEVICE_TITLE_CREATE"
            }
          />
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
                name="name"
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
            onClick={this.props.onCancel}
          >
            <FormattedMessage id="EDIT_DEVICE_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="EDIT_DEVICE_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EditCameraModal);
