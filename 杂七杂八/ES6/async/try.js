'use strict'
const f1 = async () => {
    try {
        await new Promise(function (resolve, reject) {
            throw new Error('出错了');
        });
    } catch (e) {
        console.log(e);
    }
    return await ('hello world');
}
f1().then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})



