import * as React from 'react';
import PropTypes from 'prop-types';
import { Terminal } from 'xterm';
import * as fit from 'xterm/dist/addons/fit/fit';
import * as fullscreen from 'xterm/dist/addons/fullscreen/fullscreen';
import * as search from 'xterm/dist/addons/search/search';

class XTerm extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    onData: PropTypes.func,
    onKey: PropTypes.func,
    onPaste: PropTypes.func,
    onResize: PropTypes.func,
    onContextMenu: PropTypes.func,
  }

  static defaultProps = {
    options: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };

    this.refTerm = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
  }

  applyAddon(addon) {
    Terminal.applyAddon(addon);
  }

  getTerminal() {
    return this.xterm;
  }

  write(data) {
    this.xterm && this.xterm.write(data);
  }

  writeln(data) {
    this.xterm && this.xterm.writeln(data);
  }

  focus() {
    this.xterm && this.xterm.focus();
  }

  fit() {
    this.xterm && this.xterm.fit();
  }

  resize(cols, rows) {
    this.xterm && this.xterm.resize(Math.round(cols), Math.round(rows));
  }

  setOption(key, value) {
    this.xterm && this.xterm.setOption(key, value);
  }

  refresh() {
    this.xterm && this.xterm.refresh(0, this.xterm.rows - 1);
  }

  componentDidMount() {
    Terminal.applyAddon(fit);
    Terminal.applyAddon(fullscreen);
    Terminal.applyAddon(search);

    this.xterm = new Terminal(this.props.options);
    this.xterm.open(this.refTerm.current);

    let origResize = this.xterm.resize;
    this.xterm.resize = (cols, rows) => {
      if (this.props.onResize) {
        this.props.onResize(
          cols,
          rows,
          this.refTerm.current ? this.refTerm.current.offsetWidth : 640,
          this.refTerm.current ? this.refTerm.current.offsetHeight : 480
        );
      }
      origResize.call(this.xterm, cols, rows);
    };

    this.xterm.on('focus', this.focusChanged.bind(this, true));
    this.xterm.on('blur', this.focusChanged.bind(this, false));
    this.xterm.on('data', this.onData.bind(this));
    this.xterm.on('key', this.onKey.bind(this));
    this.xterm.on('paste', this.onPaste.bind(this));

    if (this.props.onContextMenu)
      this.xterm.element.addEventListener('contextmenu', this.onContextMenu);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('orientationchange', this.onResize);
      setTimeout(() => this.fit());
    }
  }

  componentWillUnmount() {
    if (this.props.onContextMenu)
      this.xterm.element.removeEventListener('contextmenu', this.onContextMenu);

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('orientationchange', this.onResize);
    }

    this.xterm.destroy();
    this.xterm = null;
  }

  focusChanged(focused) {
    this.setState({ isFocused: focused });
  }

  onData(data) {
    this.props.onData && this.props.onData(data);
  }

  onKey(key, ev) {
    this.props.onKey && this.props.onKey({
      altKey: ev.altKey,
      ctrlKey: ev.ctrlKey,
      metaKey: ev.metaKey,
      keyCode: ev.keyCode,
      key,
    });
  }

  onPaste(data) {
    this.props.onPaste && this.props.onPaste(data);
  }

  onContextMenu(e) {
    this.props.onContextMenu && this.props.onContextMenu(e);
  }

  onResize() {
    setTimeout(() => this.xterm && this.xterm.fit(), 250);
  }

  render() {
    return (
      <div
        ref={this.refTerm}
        className={this.props.className}
        style={{
          width: this.props.width || '100%',
          height: this.props.height || '100%',
        }}
      />
    );
  }
}

export default XTerm;
