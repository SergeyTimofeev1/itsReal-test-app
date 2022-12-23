const MIN_NUMBER = 10;
const MAX_NUMBER = 30;

export function generateRangomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
