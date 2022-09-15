// input:包含是字符串格式数字的数组
// output:将数组中的字符串的数字转换为真正的数字并返回

const toNumbers = (arr) => arr.map(Number);

// or

const toNumbers = (arr) => arr.map((x) => +x);

toNumbers(['1', '2', '3']);
