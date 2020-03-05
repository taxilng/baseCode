const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
    // let i;
    // for (i = 0; i < NUM_RETRIES; ++i) {
    //     try {
    //         await superagent.get('https://cnodejs.org/api/v1/topics');
    //         break;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // console.log(i); // 3
    let arr = new Array(3).fill(superagent.get('https://cnodejs.org/api/v1/topics'));
    for await (const x of arr) {
        console.log(x.text);
    }
}
// superagent.get('https://cnodejs.org/api/v1/topics').then((res) => {
//     console.log(res.text);
// })
test();