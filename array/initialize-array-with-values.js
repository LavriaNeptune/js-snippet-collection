// input: 给出想要生成的数组的长度及数组元素的值
// output: 返回指定的数组

const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }).fill(val);

initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
