'use strict'
Promise.reject('error')
    .then(() => {
        console.log('success1')
    }, () => {
        console.log('error1');
        return Promise.reject('error');
    })
    .then(() => {
        console.log('success2')
    }, () => {
        console.log('error2')
    })