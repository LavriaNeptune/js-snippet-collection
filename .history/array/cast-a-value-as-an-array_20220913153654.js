// input:一个值或者数组
// output:值转换为包含该值的数组、数组原样输出

const castArray = (value) => (Array.isArray(value) ? value : [value]);

castArray('good');
castAray
