// input:输入一个一维数组
// output:根据数组中是否存在相同的元素返回一个布尔值

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

hasDuplicates([0, 1, 1]);
hasDuplicates([0, 1, 2]);
