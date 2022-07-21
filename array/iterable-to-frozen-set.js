// input:提供一个可迭代数据
// output:将可迭代数据转化为一个冻结的集合 -> 实际上就是新建一个由该迭代数据构成的 Set 对象,然后禁用该 Set 对象的 add、delete、clear 方法...

const frozenSet = (iterable) => {
  const s = new Set(iterable);
  s.add = undefined;
  s.delete = undefined;
  s.clear = undefined;
  return s;
};

frozenSet([1, 1, 2, 3]);
