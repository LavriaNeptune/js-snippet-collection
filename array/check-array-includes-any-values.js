// input:一个数组和一组值(数组形式)
// output:返回一个布尔值,用来表示是检测数组中是否存在至少一个给定数组中的元素...

const includesAny = (arr, values) => values.some((v) => arr.includes(v));
// some 从测试数组中依次取出元素,并且每次取出的元素都会调用 includes 方法,如果 includes 方法返回 true,则 some 相应地也返回 true,否则返回 false.