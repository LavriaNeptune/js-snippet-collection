// input:输入对象数组 + 对象数组中的某个 key
// output:以 key 为

const toObject = (arr, key) =>
  arr.reduce((pre, cur) => ({ ...pre, [cur[key]]: cur }), {});

// 内层 reduce 返回对象要用小括号包围 -> 确定其为一个对象...
// Or

const toObject = (arr, key) =>
  Object.fromEntries(arr.map((it) => [t[key], it]));
