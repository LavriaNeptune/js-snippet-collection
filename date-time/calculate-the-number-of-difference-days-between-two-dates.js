// input:两个不一样的日期
// output:两个日期之间间隔的天数

const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (24 * 60 * 60 * 1000));

console.log(diffDays(new Date('2014-12-19'), new Date('2020-01-01')));