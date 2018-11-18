var firstName = 'Michael';
var lastName = 'Jackson2';
var year = 1958;
let m = 1
function add(x, y) {
    return x + y
}
export function multiply(x, y) {
    return x * y;
}
export {multiply as addme}
export {firstName, lastName, year};
export default {m,add}