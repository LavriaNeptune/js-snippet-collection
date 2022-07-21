// input:一个数组
// output:数组的第一个元素,也就是下标为 0 的元素...

const head = (arr) => (arr && arr.length ? arr[0] : undefined);
// 取 arr[0] 之前需要判断 arr 是否存在且 arr 中的存取的元素是否大于 0 ;条件为真才取 arr[0]

head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
