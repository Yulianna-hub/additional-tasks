'use strict';

let num = 266219;
let result = 1;
num = String(num);

for (let i = 0; i < num.length; i++){
    result *= num[i];
};
console.log(result);

result **= 3;
console.log(result);

result = String(result);
document.getElementById('paragraph').innerHTML = (result.substr(0, 2));




