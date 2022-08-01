// input:输入一个数组
// output:返回筛选掉输入数组假肢元素后的数组

const compact = (arr) => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
