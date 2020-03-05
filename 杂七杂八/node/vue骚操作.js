const inBrowser = typeof window !== 'undefined'
console.log(inBrowser);

const hasProto = '__proto__' in {}
console.log(hasProto);

console.log(inBrowser && window.navigator.userAgent.toLowerCase());