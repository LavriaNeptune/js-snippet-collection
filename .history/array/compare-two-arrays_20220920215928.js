// input:输入两个数组,比较这两个数组是否相等(数组中的值、值的顺序如果均一致 -> pa相等)
// output:返回是否判断两数组是否相等的布尔值

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
