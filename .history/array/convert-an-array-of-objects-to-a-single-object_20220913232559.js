const toObject = (arr, key) =>
  arr.reduce((pre, cur) => ({ ...pre, [cur[key]]: cur }), {});

  // 内层 reduce 返回对象要用小括号包围 -> 
