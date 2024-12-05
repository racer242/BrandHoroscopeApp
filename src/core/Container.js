import React, { Component } from "react";

import MainPage from "../components/MainPage.js";
import Preloader from "../components/Preloader.js";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = this.props.store;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.onStoreChange();
    });
    this.mounted = true;
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState(state);
    }
  }

  render() {
    let children = [];
    children.push(this.props.children);
    children.push(<MainPage store={this.store} key="MainPage" />);
    if (!this.state.preloaded)
      children.push(<Preloader store={this.store} key="Preloader" />);

    return React.createElement("div", { id: "Container" }, children);
  }
}

export default Container;
