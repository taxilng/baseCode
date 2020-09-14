function side (arr) {
    arr[0] = arr[2];
}

function a (a, b, c) {
    c = 10;
    side(arguments);
    return a + b + c;
}

const b = a(1, 1, 1);
console.log(b);
