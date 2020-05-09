console.log('start');

let a = [1,2,11,22,33];
let b = [1,11,12,14,33];

let sameEle = a.filter(x => b.includes(x));
console.log(sameEle);

let diffEle = a.filter(x => !b.includes(x))
console.log(diffEle);

let symDff = a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));
console.log(symDff);








let one = ['a','b','c','d'];
let two = ['a','x','c']


console.log(one);
console.log(two);


const same = one.filter(x => two.includes(x));

const diff = one.filter(x => !two.includes(x));

const sdiff = one.filter(x => !two.includes(x)).concat(twp.filter(x => !one.includes(x)));
