// input:输入 24 进制下的数字时间值
// output:附带 am、pm 的相对应时间

const suffixAMPM = (h) => `${h % 12 === 0 ? 12 : h % 12}${}`;
