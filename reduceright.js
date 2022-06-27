const a = [[10, 1], [20, 3], [30, 5]];

const x = a.reduceRight((b, c) => b.concat(c));
console.log(x);