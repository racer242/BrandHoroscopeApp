import React, { Component } from "react";
import Preload from "react-preload";
import { preloadComplete } from "../actions/appActions";

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.preloader_completeHandler = this.preloader_completeHandler.bind(this);
    this.preloader_errorHandler = this.preloader_errorHandler.bind(this);

    this.store = this.props.store;

    this.state = {};
    this.images = [
      require("../images/bg.png"),
      require("../images/bg_mob.png"),
      require("../images/bottom.png"),
      require("../images/copyright.png"),
      require("../images/logo.png"),
      require("../images/screen1.png"),
      require("../images/screen2.png"),
      require("../images/screen3.png"),
      require("../images/sol.png"),
      require("../images/wowow.png"),
    ];
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
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  preloader_completeHandler(event) {
    console.log("Preload complete");
    setTimeout(() => {
      setTimeout(() => {
        this.store.dispatch(preloadComplete());
      }, 2000);
      this.setState({
        ...this.state,
        isComplete: true,
      });
    }, 2000);
  }

  preloader_errorHandler(event) {
    console.log("Preload error");
    this.preloader_completeHandler();
  }

  render() {
    return (
      <div
        id="Preloader"
        key="Preloader"
        style={{ opacity: this.state.isComplete ? 0 : 1 }}
      >
        <Preload
          children={<div></div>}
          loadingIndicator={<div></div>}
          images={this.images}
          autoResolveDelay={3000}
          onError={this.preloader_errorHandler}
          onSuccess={this.preloader_completeHandler}
          resolveOnError={true}
          mountChildren={true}
        />
        <div className="site-logo">
          <div className="site-logo-image"></div>
          <div className="site-logo-frame">
            <div className="site-logo-frame-image spin"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
