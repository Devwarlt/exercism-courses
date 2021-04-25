//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const _gigamilliseconds = Math.pow(10, 9) * Math.pow(10, 3);

export const gigasecond = (date) => {
  var endDate = new Date(date.getTime() + _gigamilliseconds);
  return endDate;
};