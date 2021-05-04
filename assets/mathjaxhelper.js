// MathJax.Hub.Config({
//   config: ["MMLorHTML.js"],
//   jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
//   extensions: ["MathMenu.js", "MathZoom.js"],
//   "HTML-CSS": {
//     availableFonts: ["Latin-Modern"],
//     preferredFont: "Latin-Modern",
//     webFont: "Latin-Modern",
//     mtextFontInherit: true,
//     matchFontHeight: true
//   }
// });
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"],["$","$"]],
    displayMath: [["\\[", "\\]"],["$$","$$"]],
    processEscapes: true,
    processEnvironments: true
    mtextFontInherit: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
