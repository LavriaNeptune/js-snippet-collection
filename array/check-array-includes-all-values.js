// input:一个数组和一组值(数组形式)
// output:返回一个布尔值,用来表示是检测数组中的元素是否都存在于给定数组

const includesAll = (arr, values) => values.every((v) => arr.includes(v));

// every 方法检测数组内所有元素是否都能通过指定函数的测试...如果能则返回 true,否则返回 false.
