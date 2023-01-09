console.clear();

const {sum , subtract} = require("haseeb-calculator");
const _ = require('underscore');
const fs = require("fs");
const os = require("os");

console.log(os.freemem());
console.log(sum(10,5));

const res = _.contains([1,5,7,9],5);
console.log(res);

