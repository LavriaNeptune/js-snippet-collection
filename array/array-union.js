// input:两个数组
// output:将两个数组合并为一个数组,且合并数组中的元素不重复

const sampleArr1 = [1, 2, 3];
const sampleArr2 = [2, 3, 4];

const union = (a, b) => Array.from(new Set([...a, ...b]));
const result = union(sampleArr1, sampleArr2);
