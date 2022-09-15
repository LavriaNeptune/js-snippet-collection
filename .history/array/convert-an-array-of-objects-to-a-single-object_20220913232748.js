// input:输入数组
// output:

const toObject = (arr, key) =>
  arr.reduce((pre, cur) => ({ ...pre, [cur[key]]: cur }), {});

// 内层 reduce 返回对象要用小括号包围 -> 确定其为一个对象...
// Or

const toObject = (arr, key) =>
  Object.fromEntries(arr.map((it) => [t[key], it]));