import React from "react";
import PropTypes from "prop-types";
import isRouteAllowed from "../../../common/isRouteAllowed";
import { intlShape, FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DevicesIcon from "@material-ui/icons/DeviceHub";
import UsersIcon from "@material-ui/icons/People";
import constants from "../../../common/constants";

const styles = theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch"
  },
  grow: {
    flex: 1
  },
  link: {
    display: "block",
    margin: "1rem",
    textAlign: "center",
    color: theme.sidebar.color,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  list: {
    padding: 0
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: "60%",
    margin: "2rem 0"
  },
  item: {
    background: [theme.sidebar.background, "!important"],
    color: [theme.sidebar.color, "!important"],
    justifyContent: "center",
    "& svg, & span": {
      color: [theme.sidebar.color, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.backgroundHover, "!important"],
      color: [theme.sidebar.colorHover, "!important"],
      "& svg, & span": {
        color: [theme.sidebar.colorHover, "!important"]
      }
    }
  },
  itemSelected: {
    background: [theme.sidebar.backgroundSelected, "!important"],
    color: [theme.sidebar.colorSelected, "!important"],
    "& svg, & span": {
      color: [theme.sidebar.colorSelected, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.backgroundSelectedHover, "!important"],
      color: [theme.sidebar.colorSelectedHover, "!important"],
      "& svg, & span": {
        color: [theme.sidebar.colorSelectedHover, "!important"]
      }
    }
  }
});

class Sidebar extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    roles: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func.isRequired,
    onSignOut: PropTypes.func.isRequired
  };

  handleMenuClick(path) {
    this.props.router.push(path);
    this.props.onMenuClick();
  }

  renderHeader() {
    return (
      <div className={this.props.classes.logoWrapper}>
        <img
          className={this.props.classes.logo}
          src={`${process.env.APP_STATIC}/static/img/logo.png`}
        />
      </div>
    );
  }

  renderItem(path) {
    if (
      !path ||
      !constants.pages[path] ||
      !isRouteAllowed(path, this.props.roles)
    ) {
      return null;
    }

    const { icon, menu } = constants.pages[path];
    if (!icon && !menu) return null;

    return (
      <MenuItem
        key={`page-${path}`}
        classes={{
          root: this.props.classes.item,
          selected: this.props.classes.itemSelected
        }}
        selected={this.props.router.pathname === path}
        onClick={() => this.handleMenuClick(path)}
      >
        {icon === "devices" && (
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
        )}
        {icon === "users" && (
          <ListItemIcon>
            <UsersIcon />
          </ListItemIcon>
        )}

        {!!menu && (
          <ListItemText primary={this.props.intl.formatMessage({ id: menu })} />
        )}
      </MenuItem>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <MenuList
          classes={{ root: this.props.classes.list }}
          subheader={this.renderHeader()}
        >
          {this.renderItem("/")}
          {this.renderItem("/users")}
        </MenuList>
        <div className={this.props.classes.grow} />
        <div>
          <a
            href="javascript:void(0)"
            className={this.props.classes.link}
            onClick={this.props.onSignOut}
          >
            <FormattedMessage id="SIDEBAR_SIGN_OUT_LINK" />
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
