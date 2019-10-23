// import performance api, only needed if not run a browser
const {performance } = require('perf_hooks');

// create random number
function pincodeGenerator (min, max) {
    min = Math.ceil(1000);
    max = Math.floor(1000000000);
    return Math.floor(Math.random() * (max - min)) + min;
}
const pincode = pincodeGenerator();
console.log('pincode is: ', pincode);

// "crack" random number
function crack (pincode) {
    for (var i = 1000; i < 1000000000; i++) {
        if (i === pincode) {
            return i;
        }
    }
}

// log random number and time it took to find it
var t0 = performance.now();
const solution = crack(pincode);
var t1 = performance.now();
console.log('Crack took ' + (t1 - t0) + ' milliseconds.');
console.log('cracked pincode is: ', solution);

// console.log(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10))
