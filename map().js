const a = [1, 2, 3, 4];

b=a.map(x => [x * 2]);
console.log(b);

b=a.flatMap(x => [x * 2]);
console.log(b);

b=a.flatMap(x => [[x * 2]]);
console.log(b);