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
    processEnvironments: true,
    tagSide: 'left',
    macros: {
      RR: '{\\mathbb R}'
      // b: ['{\\mathbf #1}',1]
    },
    tags: 'ams'
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  chtml: {
    scale: 1,                      // global scaling factor for all expressions
    minScale: .5,                  // smallest scaling factor to use
    matchFontHeight: true,         // true to match ex-height of surrounding font
    mtextInheritFont: true,         // true to make mtext elements use surrounding font
    merrorInheritFont: false,      // true to make merror text use surrounding font
    mtextFont: '',                 // font to use for mtext, if not inheriting (empty means use MathJax fonts)
    merrorFont: 'serif',           // font to use for merror, if not inheriting (empty means use MathJax fonts)
    unknownFamily: 'serif',        // font to use for character that aren't in MathJax's fonts
    mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
    skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
    exFactor: .5,                  // default size of ex in em units
    displayAlign: 'left',          // default for indentalign when set to 'auto'
    displayIndent: '5em'           // default for indentshift when set to 'auto'
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
