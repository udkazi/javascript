var arr1 = ['a', 'b','x'];
var arr2 = ['a', 'b', 'c', 'd'];

let intersection = arr1.filter(x => arr2.includes(x));
//[ 'a', 'b' ]
console.log(intersection);

let difference = arr1.filter(x => !arr2.includes(x));
//[ 'x' ]
console.log(difference);

let symmetricDifference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
//[ 'x', 'c', 'd' ]
console.log(symmetricDifference);﻿



