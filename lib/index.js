/**
 * idy
 * Generates a random id and potentially unique.
 *
 * @name Idy
 * @function
 * @param {Number} length The id length (default: 10).
 * @return {String} The generated id.
 */
const idy = module.exports = length => {
    length = length || 10;
    let res = ""
    do {
        res += Math.random().toString(35).substr(2, length);
    } while (res.length < length)
    return res
}
