var add = function(a, b) {
	return a + b;
}

var sub = function(a, b) {
	return a - b;
}

var mul = function(a, b) {
	return a * b;
}

/**
 * Divide a by b
 * @example
 * globalNS.div(10, 5);
 * // returns 2
 * @example
 * globalNS.div(15, 5);
 * // returns 3
 * @returns {Number} Returns the value of result for the expression: a/b.
 */

var div = function(a, b) {
	if (b != 0)
		return a / b;
	else return null;
}

module.exports = {
	add,
	sub,
	mul,
	div
}