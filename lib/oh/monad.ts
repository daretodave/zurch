
/**
 * @name eq
 * @description Compare two objects :
 *     1. if objects implement Eq, defer to their .equals
 *     2. if are arrays, iterate and recur
 * @function
 * @param {any} a Any object.
 * @param {any} b Any object.
 * @returns {boolean} In case 1, the `.equals()` function returned value.
 *     In case 2, true if each elements are equals, false otherwise.
*/

