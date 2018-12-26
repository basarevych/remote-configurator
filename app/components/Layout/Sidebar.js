import React from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import isRouteAllowed from "../../../common/isRouteAllowed";
import { intlShape, FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DevicesIcon from "@material-ui/icons/DeviceHub";
import UsersIcon from "@material-ui/icons/People";
import TerminalIcon from "@material-ui/icons/OpenInBrowser";
import BrowserIcon from "@material-ui/icons/Language";
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
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  list: {
    padding: 0
  },
  logoWrapper: {
    padding: "2rem"
  },
  logo: {
    filter: "url(#logoShadow)"
  },
  logoShape: {
    fill: "url(#logoGradient)"
  },
  item: {
    background: [theme.sidebar.itemBackground, "!important"],
    color: [theme.sidebar.itemColor, "!important"],
    borderTop: ["none", "!important"],
    borderLeft: [theme.sidebar.itemBorder, "!important"],
    borderRight: ["none", "!important"],
    borderBottom: ["none", "!important"],
    justifyContent: "center",
    "& svg, & span": {
      color: [theme.sidebar.itemColor, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.itemHoverBackground, "!important"],
      color: [theme.sidebar.itemHoverColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemHoverBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemHoverColor, "!important"]
      }
    }
  },
  itemSelected: {
    background: [theme.sidebar.itemSelectedBackground, "!important"],
    color: [theme.sidebar.itemSelectedColor, "!important"],
    borderTop: ["none", "!important"],
    borderLeft: [theme.sidebar.itemSelectedBorder, "!important"],
    borderRight: ["none", "!important"],
    borderBottom: ["none", "!important"],
    "& svg, & span": {
      color: [theme.sidebar.itemSelectedColor, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.itemSelectedHoverBackground, "!important"],
      color: [theme.sidebar.itemSelectedHoverColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemSelectedHoverBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemSelectedHoverColor, "!important"]
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
    terminals: PropTypes.instanceOf(Map).isRequired,
    getDeviceName: PropTypes.func.isRequired,
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={this.props.classes.logo}
        >
          <defs>
            <radialGradient id="logoGradient">
              <stop
                offset="0"
                stopColor={lighten(
                  this.props.theme.palette.secondary.main,
                  0.3
                )}
              />
              <stop
                offset="15%"
                stopColor={lighten(
                  this.props.theme.palette.secondary.main,
                  0.3
                )}
              />
              <stop
                offset="100%"
                stopColor={this.props.theme.palette.secondary.main}
              />
            </radialGradient>
            <mask id="logoMask">
              <rect x="0" y="0" width="24" height="24" fill="white" />
              <path
                d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                transform="translate(2, 1)"
                fill="black"
              />
            </mask>
            <filter id="logoShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="-2" dy="-2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7"
            className={this.props.classes.logoShape}
            mask="url(#logoMask)"
          />
        </svg>
      </div>
    );
  }

  renderItem({ path, text, query }) {
    if (
      !path ||
      !constants.pages[path] ||
      !isRouteAllowed(path, this.props.roles) ||
      (path === "/browser" && this.props.router.pathname !== "/browser")
    ) {
      return null;
    }

    const { icon, menu } = constants.pages[path];
    if (!icon && !menu) return null;

    let isSelected = this.props.router.pathname === path;
    if (path === "/terminal" && isSelected) {
      isSelected =
        query &&
        this.props.router.query &&
        this.props.router.query.terminalId === query.terminalId;
    }
    if (path === "/browser") {
      text =
        (this.props.router.query && this.props.router.query.host) +
        ":" +
        (this.props.router.query && this.props.router.query.port);
    }

    return (
      <MenuItem
        key={`page-${path}-${query ? query.terminalId : "none"}`}
        classes={{
          root: this.props.classes.item,
          selected: this.props.classes.itemSelected
        }}
        selected={isSelected}
        onClick={() => this.handleMenuClick({ pathname: path, query })}
      >
        {icon === "devices" && (
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
        )}
        {icon === "browser" && (
          <ListItemIcon>
            <BrowserIcon />
          </ListItemIcon>
        )}
        {icon === "terminal" && (
          <ListItemIcon>
            <TerminalIcon />
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
        {!!text && <ListItemText primary={text} />}
      </MenuItem>
    );
  }

  render() {
    // eslint-disable-next-line lodash/prefer-lodash-method
    const terminals = this.props.terminals
      .map((terminal, terminalId) => _.assign(terminal.toJS(), { terminalId }))
      .toList()
      .sort((a, b) => a.whenCreated - b.whenCreated)
      .toJS();

    return (
      <div className={this.props.classes.root}>
        <MenuList
          classes={{ root: this.props.classes.list }}
          subheader={this.renderHeader()}
        >
          {this.renderItem({ path: "/" })}
          {this.renderItem({ path: "/browser" })}
          {_.map(terminals, terminal =>
            this.renderItem({
              path: "/terminal",
              text: terminal.name,
              query: { terminalId: terminal.terminalId }
            })
          )}
          {this.renderItem({ path: "/users" })}
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
