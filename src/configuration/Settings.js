import { isMobile, isLocal } from "../core/helpers";
import agencies from "./Agencies";
import comps from "./Comps";
import matches from "./Matches";

const settings = {
  assetsUrl: ".",
  localStoreName: "appState_291124",

  isMobile: isMobile(),
  isLocal: isLocal(),

  rootURL: "https://mediasmit.tmweb.ru/testpage/bh6/",

  zodiac: [
    { name: "Козерог", start: [1, 1], end: [20, 1] },
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
    { name: "Козерог", start: [23, 12], end: [31, 12] },
  ],
  comps,
  agencies,
  matches,
};

//For copy-paste to file set encoding - OEM
// let mchs =
//   "xcopy /e/h/y /z/i /k /f ..\\publish_page\\publish.css ..\\app\\public\\\n\n";
// for (const comp of comps) {
//   let mts = matches.reduce((am, vm, im) => {
//     if (vm.comp == comp.name) {
//       let ags = agencies.reduce((aa, va, ia) => {
//         if (va.name == vm.agency) {
//           aa.push(va);
//         }
//         return aa;
//       }, []);
//       let ag = ags[0];

//       am +=
//         `xcopy /e/h/y /z/i /k /f ..\\publish_page\\matches\\comp\\agency\\index.html ..\\app\\public\\matches\\${comp.id}\\${ag.id}\\\n\n` +
//         `call __replace.cmd "..\\app\\public\\matches\\${comp.id}\\${
//           ag.id
//         }\\index.html" "${vm.comp.replace("'", "''")}" "${vm.agency.replace(
//           "'",
//           "''"
//         )}" "${vm.text}"\n\n`;
//     }
//     return am;
//   }, "");
//   mchs += mts + "\n\n\n";
// }
// console.log(mchs);

export default settings;
