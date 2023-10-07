const a = [ 4, 5, 8, 9 ];
const b = [ 3, 4, 5, 7 ];
// const c = [ ...a, ...b ];

const A = new Set(a);
const B = new Set(b);
// const C = new Set(c);
// console.log(C);

// const c = a.filter((num) => B.has(num));
// const C = new Set(c);
// console.log(C);

const c = a.filter((num) => !(B.has(num)));
const C = new Set(c);
console.log(C);
