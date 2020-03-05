import { foo , fok as fa} from './profile.js';
console.log(foo);
console.log(fa);
setTimeout(() => {
    console.log(foo);
}, 1000);