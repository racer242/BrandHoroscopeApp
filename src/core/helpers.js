import MobileDetect from "mobile-detect";

export const callLater = (callback, delay = 100) => {
  return setTimeout(callback, delay);
};

export const isMobile = () => {
  var mobileDetect = new MobileDetect(window.navigator.userAgent);
  return mobileDetect.mobile();
};

export const isLocal = () => {
  return !/^h/.test(document.location.toString());
};

export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

export const openLink = (link) => {
  // let url=correctUrl(link)
  // console.log("??",url);
  window.open(link, "_blank");
};
