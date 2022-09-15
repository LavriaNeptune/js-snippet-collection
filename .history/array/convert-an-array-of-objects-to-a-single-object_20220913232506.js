const toObject = (arr, key) =>
  arr.reduce((pre, cur) => ({ ...pre, [cur[key]]: cur }), {});

  // 内层 reduce 
