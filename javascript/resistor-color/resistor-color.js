//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
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

export const colorCode = (colorName) => {
  colorName = colorName.toLowerCase();
  if (!_colorNames.includes(colorName))
    return `Key '${colorName}' is not defined in colors!`;

  return _colors[colorName];
};

export const COLORS = _colorNames;
