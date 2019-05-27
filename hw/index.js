// function promiseCreator(time, message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message)
//         }, time);
//     })
// }

// const prom = promiseCreator(5000, 'Ok!');
// prom.then(console.log);


class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        })
    }
}

const inst = new Prom();

inst.promise.then(data => console.log(data)).catch(console.log);
setTimeout(() => inst.resolve('test'), 5000)