//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const _earthYearInSeconds = 365.25 * 24 * 60 * 60;

var _orbitalPeriods = {
  'earth': 1,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
};

Object.entries(_orbitalPeriods).forEach(([key, value]) => {
  const planet = key;
  var orbitalPeriod = _earthYearInSeconds * value;
  _orbitalPeriods[planet] = orbitalPeriod;
});

export const age = (planet, elapsedTime) => {
  planet = planet.toLowerCase();
  if (!(planet in _orbitalPeriods))
    return `Planet '${planet}' isn't defined!`;

  const orbitalPeriod = _orbitalPeriods[planet];
  const planetAge = elapsedTime / orbitalPeriod;
  const roundedPlanetAge = Math.round((planetAge + Number.EPSILON) * 100) / 100;
  console.log(`'${planet}' is ${planetAge} ${planet}-years old (rounded: ${roundedPlanetAge}).`);
  return roundedPlanetAge;
};
