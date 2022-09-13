// input:输入一个数组
// output:返回一个判断该数组是否为空数组的布尔值

const isEmpty = (arr) => Array.isArray(arr) && !arr.length;
// 需要满足两个条件返回 true -> 输入数据为一个数组;数组长度为 0