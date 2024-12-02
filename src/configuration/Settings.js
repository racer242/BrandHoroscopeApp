import { isMobile, isLocal } from "../core/helpers";

const settings = {
  assetsUrl: ".",
  localStoreName: "appState_291124",

  isMobile: isMobile(),
  isLocal: isLocal(),
};

export default settings;
