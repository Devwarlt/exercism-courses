//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const _colors = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}
const _colorNames = Object.keys(_colors);

export const decodedValue = (colors) => {
  var value = "0";
  for (var i = 0; i < 2; i++) {
    const color = colors[i];
    if (color == undefined)
      break;

    const colorName = color.toLowerCase();
    if (!_colorNames.includes(colorName)) {
      console.log(`Key '${colorName}' is not defined in colors!`);
      continue;
    }

    const colorValue = _colors[colorName].toString();
    value += colorValue;
  }

  return parseInt(value);
};
