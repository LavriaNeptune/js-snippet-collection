const sampleArr = [1, 2, 3];

// 最基础的 for 循环...
/* for (let i = 0; i < sampleArr.length; i++) {
  const element = sampleArr[i];
  console.log(element);
} */

// 优化版的 for 循环 -> 将数组长度存储在临时变量中,避免每次循环重复地获取数组长度,数组长度较大时效果明显。
/* for (let i = 0, len = sampleArr.length; i < len; i++) {
  const element = sampleArr[i];
  console.log(element);
} */

// forEach 专用于数组的循环方法:数组的 forEach 接收一个回调函数作为参数，该回调接收 3 个参数:item 元素自身,index 元素索引,array 数组本身。
/* sampleArr.forEach((item, index, arr) => {
  console.log(`取出数组[${arr}]的第${index}个元素${item}`);
}); */

// 数组的 map 方法,其使用方法和 foreach 类似,不过 map 方法返回的值可以构成一个新的数组。并作为 map 方法的返回。
/* const result = sampleArr.map((item, index, arr) => {
  return item * 2;
});
console.log(result); //[ 2, 4, 6 ] */

// for-of 可以遍历可迭代对象...正巧数组就是可迭代对象
/* for (const iterator of sampleArr) {
  console.log(iterator);
} */

// filter 方法,接受一个回调函数作为参数,只要通过回调函数的返回值为 true 的元素,就会被收集到一个新数组总作为 filter 方法的结果返回。
/* const result = sampleArr.filter((item) => {
  return item > 1;
});
console.log(result); // [2, 3]; */

// 数组的 every 方法,接受一个类 foreach 的回调函数作为参数,若该回调函数中每一项的判定都返回 true 则返回 true,否则返回 false。
/* const result = sampleArr.every((item) => {
  return item < 10;
});
console.log(result); // true */

// 数组的 every 方法,类似于 every 方法,只不过是只要回调对任一项返回 true,则返回 true,否则返回 false。
/* const result = sampleArr.some((item) => {
  return item < 10;
});
console.log(result); // true */

// 数组的 reduce 方法,接受一个回调函数作为参数,该回调函数接收 4 个参数:accumulator 当前累加值,currentValue 当前元素,index 当前元素索引,array 数组本身,该方法 return 的数将作为下次迭代的当前值参与计算;除此之外还接受一个初始值作为累加值,如果忽略则将数组的第一个元素作为初始值。
/* const result = sampleArr.reduce((iv, cv) => {
  console.log(iv, cv);
  return iv + cv;
});
console.log(result); */

// 数组的 find 方法,类 foreach 方法,会返回符合回调函数返回 true 的第一个数组元素,如果没有符合的则会返回 undefined。
/* const result = sampleArr.find((item) => {
  return item > 1;
});
console.log(result); // 2 */

// 数组的 findIndex 方法,类 foreach 方法,会返回符合回调函数返回 true 的第一个数组元素的下标,如果没有符合的则会返回 -1
/* const result = sampleArr.findIndex((item) => {
  return item > 1;
});
console.log(result); // 1 */
