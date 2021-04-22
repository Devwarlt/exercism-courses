//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  if (name == null || name == '')
    name = "you";

  var output = `One for ${name}, one for me.`;
  return output;
};
