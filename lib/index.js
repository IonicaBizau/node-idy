/**
 * RandomId
 * Generates a random id and potentially unique.
 *
 * @name RandomId
 * @function
 * @param {Number} length The id length (default: 10).
 * @return {String} The generated id.
 */
function RandomId(length) {
    length = length || 10;
    return Math.random().toString(35).substr(2, length);
}

module.exports = RandomId;
