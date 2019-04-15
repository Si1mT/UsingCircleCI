/**
 * get random number in range
 *
 * @returns {number}
 */
module.exports = function random(min=1, max=10000) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
