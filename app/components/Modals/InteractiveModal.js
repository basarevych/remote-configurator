import React from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import { intlShape, FormattedMessage } from "react-intl";
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

const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class InteractiveModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    data: PropTypes.instanceOf(Map).isRequired,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  static formName = "interactiveAuthForm";

  static fields = {
    reply: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      label: "KEYBOARD_AUTH_REPLY_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    props.onFinish(this.getValue(props, "reply"));

    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("reply", ""));
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
    let prompts = this.props.data.get("prompts");
    prompts = prompts ? prompts.toJS() : [];

    return (
      <Dialog
        maxWidth="xs"
        open={this.props.isOpen}
        onClose={this.handleCancel}
      >
        <DialogTitle>
          <FormattedMessage id="KEYBOARD_AUTH_TITLE" />: {this.props.name}
        </DialogTitle>
        {this.props.banner && (
          <DialogContent>
            <DialogContentText>
              {this.props.data.get("banner")}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogContent>
          {_.map(prompts, (item, index) => (
            <DialogContentText key={`error-${index}`}>
              {item.prompt}
            </DialogContentText>
          ))}
        </DialogContent>
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
                name="reply"
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
            <FormattedMessage id="KEYBOARD_AUTH_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="KEYBOARD_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(InteractiveModal);
