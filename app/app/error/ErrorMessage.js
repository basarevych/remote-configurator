import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import HttpStatus from "http-status-codes";

export const styles = theme => ({
  layout: {
    width: "100%",
    maxWidth: 1300 + 2 * theme.main.spacing,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.main.spacing,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.main.spacing / 2,
      maxWidth: 1300 + theme.main.spacing
    }
  },
  code: {
    fontSize: "300%",
    textShadow: "2px 2px 4px #000000",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.primary}`,
    borderRight: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down("md")]: {
      borderRight: "none"
    }
  },
  text: {
    fontSize: "200%",
    textShadow: "2px 2px 4px #000000",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.secondary}`
  },
  linkWrapper: {
    fontSize: "1rem",
    marginTop: "1rem"
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      color: "#ffffff"
    }
  }
});

class ErrorMessage extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    statusCode: PropTypes.number,
    error: PropTypes.object
  };

  getCode() {
    if (this.props.error) return this.props.intl.formatMessage({ id: "ERROR" });
    if (!this.props.statusCode || this.props.statusCode === 200) return 500;
    return this.props.statusCode;
  }

  getText() {
    if (this.props.error) return this.props.error.message;
    return HttpStatus.getStatusText(this.getCode());
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.code}>{this.getCode()}</div>
        <div className={this.props.classes.text}>
          {this.getText()}
          <div className={this.props.classes.linkWrapper}>
            &gt;&nbsp;&nbsp;
            <a href="/" className={this.props.classes.link}>
              <FormattedMessage id="ERROR_GO_HOME_LINK" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
