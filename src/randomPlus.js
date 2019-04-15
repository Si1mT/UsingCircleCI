const random = require("./random");

/**
 * takes number and input and returns this number + random value
 *
 * check examples.js for usage example
 *
 * @param {number} number
 * @returns {number}
 */
module.exports = function randomPlus(number) {
	return random(1, 99) + number;
};
