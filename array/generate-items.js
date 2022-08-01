// input: 给出生成数组的个数, 生成数组元素的函数
// output: 返回符合规定的数组

const generateItems = (n, fn) => Array.from({ length: n }, (v, i) => fn(i));
result = generateItems(5, Math.random);
console.log(result);
