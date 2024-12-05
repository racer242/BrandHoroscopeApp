import { isMobile, isLocal } from "../core/helpers";
import agencies from "./Agencies";
import comps from "./Comps";
import matches from "./Matches";

const settings = {
  assetsUrl: ".",
  localStoreName: "appState_291124",

  isMobile: isMobile(),
  isLocal: isLocal(),

  zodiac: [
    { name: "Водолей", start: [21, 1], end: [19, 2] },
    { name: "Рыбы", start: [20, 2], end: [20, 3] },
    { name: "Овен", start: [21, 3], end: [20, 4] },
    { name: "Телец", start: [21, 4], end: [20, 5] },
    { name: "Близнецы", start: [21, 5], end: [21, 6] },
    { name: "Рак", start: [22, 6], end: [22, 7] },
    { name: "Лев", start: [23, 7], end: [21, 8] },
    { name: "Дева", start: [22, 8], end: [23, 9] },
    { name: "Весы", start: [24, 9], end: [23, 10] },
    { name: "Скорпион", start: [24, 10], end: [22, 11] },
    { name: "Стрелец", start: [23, 11], end: [22, 12] },
    { name: "Козерог", start: [23, 12], end: [20, 1] },
  ],
  comps,
  agencies,
  matches,
};

export default settings;
