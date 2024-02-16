const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visitedCols = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visitedCols.has(col)) {
        if (matrix[row][col] !== 0) {
          sum += matrix[row][col];
        } else {
          visitedCols.add(col);
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
