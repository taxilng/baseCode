export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
export {foo as fok}