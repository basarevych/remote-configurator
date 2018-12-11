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

class EditDeviceModal extends Form {
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

    if (result === true) await props.onLoad();
    else if (result && _.isObject(result)) throw new SubmissionError(result);

    return result;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    /* eslint-disable lodash/prefer-lodash-method */
    if (prevState.isOpen !== nextProps.isOpen) {
      let name = nextProps.data && nextProps.data.get("name");
      nextProps.dispatch(nextProps.change("name", name || ""));
      nextProps.dispatch(nextProps.change("password", ""));
      nextProps.dispatch(nextProps.clearAsyncError());
      nextProps.dispatch(nextProps.clearSubmitErrors());
      state.isOpen = nextProps.isOpen;
    }
    /* eslint-enable */

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };

    this.submit = this.submit.bind(this);
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
        {this.props.error && (
          <DialogContent>
            {_.map(
              _.isArray(this.props.error)
                ? this.props.error
                : [this.props.error],
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
          <Grid
            container
            spacing={16}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.submit}
          >
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="name"
                type="text"
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                formFields={this.constructor.fields}
                formProps={this.props}
                name="password"
                type="password"
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
            <FormattedMessage id="EDIT_DEVICE_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="EDIT_DEVICE_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EditDeviceModal);
