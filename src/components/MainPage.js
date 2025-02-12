import React, { Component } from "react";
import smoothScrollTo from "smooth-scroll-to";
import {
  nextMatchSelected,
  userDateChanged,
  userDateSelected,
  userMatchSelected,
} from "../actions/appActions";

import { ReactComponent as TgIcon } from "../images/tg_icon.svg";
import { ReactComponent as VkIcon } from "../images/vk_icon.svg";
import { ReactComponent as DownloadIcon } from "../images/download_icon.svg";
import { ReactComponent as ArrowDown } from "../images/arrow_down.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import { ReactComponent as X } from "../images/x.svg";
import PolicyPopup from "./PolicyPopup";
import CompsPopup from "./CompsPopup";
import AboutPopup from "./AboutPopup";
import { unknownComp } from "../configuration/Comps";
import { unknownMatch } from "../configuration/Matches";
import { unknownAgency } from "../configuration/Agencies";
import DateInput from "./DateInput";
import { downloadLink, getTgUrl, getVkUrl, isMobile } from "../core/helpers";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.ref = React.createRef();

    this.minDateStr = "1900-01-01";
    this.maxDateStr = "2024-12-31";
    this.minDate = new Date(this.minDateStr);
    this.maxDate = new Date(this.maxDateStr);

    this.state = {
      desktopBounds: {
        width: 1280, //1250,
        height: 1080, //1080,
      },
      mobileBounds: {
        width: 470,
        height: 1060, //1180,
      },
      pageBounds: {
        width: 0,
        height: 0,
      },
      switchToMobileWidth: 720,

      pageScale: 1,
      pageX: 0,
      pageY: 0,
      pageWidth: 0,
      pageInnerHeight: 0,
      blockHeight: 0,
      blockInnerHeight: 0,
      bottomFinalHeight: 370,
      bottomHeight: 370,

      screens: 1,
      aboutPopup: false,
      compsPopup: false,
      policyPopup: false,

      userComp: unknownComp,
      userMatch: unknownMatch,
      userAgency: unknownAgency,
    };

    this.dateButton_clickHandler = this.dateButton_clickHandler.bind(this);

    this.date_changeHandler = this.date_changeHandler.bind(this);

    this.matchButton_clickHandler = this.matchButton_clickHandler.bind(this);
    this.nextButton_clickHandler = this.nextButton_clickHandler.bind(this);

    this.aboutButton_clickHandler = this.aboutButton_clickHandler.bind(this);
    this.closeAboutPopup_clickHandler =
      this.closeAboutPopup_clickHandler.bind(this);

    this.compsButton_clickHandler = this.compsButton_clickHandler.bind(this);
    this.closeCompsPopup_clickHandler =
      this.closeCompsPopup_clickHandler.bind(this);

    this.policyButton_clickHandler = this.policyButton_clickHandler.bind(this);
    this.closePolicyPopup_clickHandler =
      this.closePolicyPopup_clickHandler.bind(this);

    this.tgButton_clickHandler = this.tgButton_clickHandler.bind(this);
    this.vkButton_clickHandler = this.vkButton_clickHandler.bind(this);
    this.downloadButton_clickHandler =
      this.downloadButton_clickHandler.bind(this);

    this.state = { ...this.state, ...this.updateBounds() };
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    let bounds = this.updateBounds();
    if (bounds) {
      this.setState({ ...this.state, ...bounds });
    }
  }

  onStoreChange() {
    if (this.mounted) {
      let state = this.store.getState();
      this.setState({
        ...this.state,
        ...state,
      });
    }
  }

  updateBounds() {
    let width =
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.innerWidth;
    let height =
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      window.innerHeight;

    if (this.lastWidth !== width || this.lastHeight !== height) {
      this.lastWidth = width;
      this.lastHeight = height;

      let pageBounds = this.state.pageBounds;

      let mobileSize = false;

      if (width > this.state.switchToMobileWidth) {
        pageBounds.width = this.state.desktopBounds.width;
        pageBounds.height = this.state.desktopBounds.height;
      } else {
        pageBounds.width = this.state.mobileBounds.width;
        pageBounds.height = this.state.mobileBounds.height;
        mobileSize = true;
      }

      let pageScale = Math.min(
        width / pageBounds.width,
        height / pageBounds.height
      );
      let pageX = (width - pageBounds.width) / 2 / pageScale;
      let pageY = 0;

      return {
        pageBounds,
        pageScale,
        pageX,
        pageY,
        pageWidth: width,
        blockHeight: height,
        blockInnerHeight: height / pageScale,
        mobileSize,
      };
    } else {
      return null;
    }
  }

  dateButton_clickHandler(event) {
    this.store.dispatch(userDateSelected());
    setTimeout(
      () =>
        smoothScrollTo(
          this.state.blockHeight * (this.state.mobileSize ? 1.23 : 1),
          500,
          this.ref.current
        ),
      200
    );
  }

  date_changeHandler(value) {
    let date = new Date(value);
    if (
      date.getTime() >= this.minDate.getTime() &&
      date.getTime() <= this.maxDate.getTime()
    ) {
      this.store.dispatch(userDateChanged(value));
      return true;
    } else {
      this.store.dispatch(userDateChanged(null));
    }
    return false;
  }

  matchButton_clickHandler(event) {
    this.store.dispatch(userMatchSelected());
    setTimeout(
      () =>
        smoothScrollTo(
          this.state.blockHeight * (this.state.mobileSize ? 2.73 : 2),
          500,
          this.ref.current
        ),
      200
    );
  }

  nextButton_clickHandler(event) {
    this.store.dispatch(nextMatchSelected());
    setTimeout(
      () =>
        smoothScrollTo(
          this.state.blockHeight * (this.state.mobileSize ? 2.73 : 2),
          500,
          this.ref.current
        ),
      200
    );
  }

  aboutButton_clickHandler(event) {
    this.setState({ ...this.state, aboutPopup: true });
  }

  closeAboutPopup_clickHandler(event) {
    this.setState({ ...this.state, aboutPopup: false });
  }

  compsButton_clickHandler(event) {
    this.setState({ ...this.state, compsPopup: true });
  }

  closeCompsPopup_clickHandler(event) {
    this.setState({ ...this.state, compsPopup: false });
  }

  policyButton_clickHandler(event) {
    this.setState({ ...this.state, policyPopup: true });
  }

  closePolicyPopup_clickHandler(event) {
    this.setState({ ...this.state, policyPopup: false });
  }

  tgButton_clickHandler(event) {
    window.open(
      getTgUrl(
        this.state.rootURL +
          "matches/" +
          this.state.userComp.id +
          "/" +
          this.state.userAgency.id +
          "/index.html"
      ),
      "_blank"
    );
  }
  vkButton_clickHandler(event) {
    window.open(
      getVkUrl(
        this.state.rootURL +
          "matches/" +
          this.state.userComp.id +
          "/" +
          this.state.userAgency.id +
          "/index.html"
      ),
      "_blank"
    );
  }
  downloadButton_clickHandler(event) {
    downloadLink(
      "matches/" +
        this.state.userComp.id +
        "/" +
        this.state.userAgency.id +
        "/og.jpg",
      this.state.userComp.id + "-" + this.state.userAgency.id
    );
  }

  render() {
    let children = [];
    children.push(this.props.children);

    let pageInnerHeight =
      this.state.blockInnerHeight * this.state.screens +
      this.state.bottomHeight;

    let finalInnerAddition =
      -this.state.blockInnerHeight +
      this.state.pageBounds.height +
      this.state.bottomFinalHeight;

    if (this.state.screens > 2) pageInnerHeight += finalInnerAddition;

    return (
      <div
        id="PageContainer"
        key="PageContainer"
        style={{
          height: this.state.blockHeight,
        }}
        ref={this.ref}
      >
        <div
          id="PageBox"
          key="PageBox"
          style={{
            height: pageInnerHeight * this.state.pageScale,
          }}
        >
          <div
            id="PageContent"
            key="PageContent"
            style={{
              width: this.state.pageBounds.width,
              height: pageInnerHeight,
              transform: `scale(${this.state.pageScale}) translateX(${this.state.pageX}px) translateY(${this.state.pageY}px)`,
            }}
          >
            <div
              id="Screen1"
              className="screen"
              style={{
                width: this.state.pageBounds.width,
                height: this.state.blockInnerHeight,
              }}
            >
              <div id="PageTop">
                <div
                  className="dark-button"
                  onClick={this.aboutButton_clickHandler}
                >
                  Что это?
                </div>
                <div className="site-logo">
                  <div className="site-logo-image"></div>
                  <div className="site-logo-frame">
                    <div className="site-logo-frame-image spin"></div>
                  </div>
                </div>
                <div
                  className="dark-button"
                  onClick={this.compsButton_clickHandler}
                >
                  Участники
                </div>
              </div>
              <div
                className="screen-block"
                style={
                  this.state.mobileSize
                    ? {
                        marginTop: "10%",
                        transform: "translate(-50%, -50%) scale(.9)",
                      }
                    : {
                        marginTop: "5%",
                        transform: "translate(-50%, -50%) scale(1.15)",
                      }
                }
              >
                {this.state.mobileSize ? (
                  <img
                    src={require("../images/screen1m.png")}
                    style={{
                      transform: "scale(1.4)",
                    }}
                  ></img>
                ) : (
                  <img src={require("../images/screen1.png")}></img>
                )}
                <div className="screen-content" style={{ paddingTop: 140 }}>
                  <h1>
                    кто ты
                    <br />
                    по бренд-
                    <br />
                    гороскопу?
                  </h1>

                  <div className="form">
                    <div className="input-container">
                      <DateInput
                        min={this.minDate}
                        max={this.maxDate}
                        onChange={this.date_changeHandler}
                      />
                      <p className="label">введи дату рождения</p>
                    </div>
                    <button
                      className="light-button"
                      type="button"
                      onClick={this.dateButton_clickHandler}
                      disabled={!this.state.date}
                    >
                      Узнать
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {this.state.screens > 1 && (
              <div
                id="Screen2"
                className="screen"
                style={
                  this.state.mobileSize
                    ? {
                        width: this.state.pageBounds.width,
                        height: this.state.blockInnerHeight * 1.5,
                      }
                    : {
                        width: this.state.pageBounds.width,
                        height: this.state.blockInnerHeight,
                      }
                }
              >
                <div className="screen-block">
                  {this.state.mobileSize ? (
                    <img
                      src={require("../images/screen2m.png")}
                      style={{
                        transform: "scale(1.4)",
                      }}
                    ></img>
                  ) : (
                    <img src={require("../images/screen2.png")}></img>
                  )}

                  <div className="screen-content" style={{ top: "49%" }}>
                    <div className="screen-bounded">
                      <div className="screen-top">
                        <img
                          src={this.state.userComp.logo}
                          style={{
                            width: "100%",
                            height: 100,
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        ></img>
                        <h2>
                          ты — <br />
                          {this.state.userComp.name}
                        </h2>
                        <p
                          className="label"
                          dangerouslySetInnerHTML={{
                            __html: this.state.userComp.comment,
                          }}
                        ></p>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.userComp.text,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className="screen-below">
                    <div
                      className="light-button"
                      onClick={this.matchButton_clickHandler}
                    >
                      Подобрать пару
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.screens > 2 && (
              <div
                id="Screen3"
                className="screen"
                style={
                  this.state.mobileSize
                    ? {
                        width: this.state.pageBounds.width,
                        height:
                          this.state.pageBounds.height * 1.5 +
                          this.state.bottomFinalHeight,
                      }
                    : {
                        width: this.state.pageBounds.width,
                        height:
                          this.state.pageBounds.height +
                          this.state.bottomFinalHeight,
                      }
                }
              >
                <div
                  className="screen-block-final"
                  style={
                    this.state.mobileSize
                      ? {
                          marginTop: "40%",
                          transform: "translate(-50%) scale(1.05)",
                        }
                      : {
                          marginTop: "-2%",
                          transform: "translate(-50%) scale(1.1)",
                        }
                  }
                >
                  <div
                    className="screen-above"
                    style={
                      this.state.mobileSize ? { top: "-20%" } : { top: "8%" }
                    }
                  >
                    <ArrowDown height="100" />
                  </div>

                  {this.state.mobileSize ? (
                    <img
                      src={require("../images/screen3m.png")}
                      style={{
                        transform: "scale(1.4)",
                      }}
                    ></img>
                  ) : (
                    <img src={require("../images/screen3.png")}></img>
                  )}

                  <div className="screen-content" style={{ paddingTop: 70 }}>
                    <div className="screen-bounded">
                      <h2>
                        Твоё
                        <br />
                        идеальное
                        <br />
                        агентство
                      </h2>
                      <div
                        className="row-group"
                        style={
                          this.state.mobileSize
                            ? { flexDirection: "column", gap: 30 }
                            : { gap: 20 }
                        }
                      >
                        <img
                          src={this.state.userComp.logo}
                          style={
                            this.state.mobileSize
                              ? {
                                  maxWidth: "80%",
                                  height: 100,
                                  objectFit: "contain",
                                  objectPosition: "right",
                                }
                              : {
                                  maxWidth: "calc(50% - 45px)",
                                  height: 70,
                                  objectFit: "contain",
                                  objectPosition: "right",
                                }
                          }
                        ></img>
                        <Heart
                          style={
                            this.state.mobileSize
                              ? {
                                  flex: "0 0 30px",
                                  width: 40,
                                  height: 40,
                                  objectFit: "contain",
                                  objectPosition: "center",
                                }
                              : {
                                  flex: "0 0 30px",
                                  width: 30,
                                  height: 30,
                                  objectFit: "contain",
                                  objectPosition: "center",
                                }
                          }
                        />
                        <img
                          src={this.state.userAgency.logo}
                          style={
                            this.state.mobileSize
                              ? {
                                  maxWidth: "80%",
                                  height: 100,
                                  objectFit: "contain",
                                  objectPosition: "left",
                                }
                              : {
                                  maxWidth: "calc(50% - 45px)",
                                  height: 70,
                                  objectFit: "contain",
                                  objectPosition: "left",
                                }
                          }
                        ></img>
                      </div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: this.state.userMatch.text,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className="screen-below">
                    <div
                      className="light-button"
                      onClick={this.nextButton_clickHandler}
                    >
                      Кто ещё
                      <br />
                      мне подойдет?
                    </div>
                  </div>
                </div>
                <div className="screen-below-final">
                  <img src={require("../images/bottom.png")}></img>
                  <div className="screen-below-final-content">
                    <div className="row-group">
                      <TgIcon
                        className="social-button"
                        onClick={this.tgButton_clickHandler}
                      />
                      <VkIcon
                        className="social-button"
                        onClick={this.vkButton_clickHandler}
                      />
                      <DownloadIcon
                        className="social-button"
                        onClick={this.downloadButton_clickHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              id="PageBottom"
              style={{
                height: this.state.bottomHeight,
              }}
            >
              <div id="PageBottomContent">
                <div className="row-group bottom-menu">
                  {/* <a
                    href="https://2024.brandhoroscope.ru/"
                    target="_blank"
                    className="link-button"
                  >
                    Версия 2024 года
                  </a>
                  <a
                    href="https://2023.brandhoroscope.ru/"
                    target="_blank"
                    className="link-button"
                  >
                    Версия 2023 года
                  </a> */}
                  <a
                    href="https://t.me/addstickers/brandhoroscope"
                    target="_blank"
                    className="link-button"
                  >
                    Скачать стикерпак
                  </a>
                  <div
                    className="link-button"
                    onClick={this.policyButton_clickHandler}
                  >
                    Конфиденциальность
                  </div>
                  <a
                    href="mailto:hello@brandhoroscope.ru"
                    target="_blank"
                    className="link-button"
                  >
                    hello@brandhoroscope.ru
                  </a>
                </div>
                <div className="row-group copyright">
                  <a href="https://solcreative.ru/" className="image-button">
                    <img src={require("../images/sol.png")}></img>
                  </a>

                  <X width={60} />
                  <a href="https://wowow.digital/" className="image-button">
                    <img src={require("../images/wowow.png")}></img>
                  </a>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
        {this.state.aboutPopup && (
          <AboutPopup onClose={this.closeAboutPopup_clickHandler} />
        )}
        {this.state.compsPopup && (
          <CompsPopup onClose={this.closeCompsPopup_clickHandler} />
        )}
        {this.state.policyPopup && (
          <PolicyPopup onClose={this.closePolicyPopup_clickHandler} />
        )}
      </div>
    );
  }
}

export default MainPage;
