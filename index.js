const basics = require("./operations/basics.js");
const area = require("./operations/area.js");
const formula = require("./operations/formula.js");
const perimeter = require("./operations/perimeter.js")
const hipotenusa = require("./operations/hypotenuse.js")

module.exports = {
    ...area,
    ...basics,
    ...formula,
    ...hipotenusa,
    ...perimeter
  };