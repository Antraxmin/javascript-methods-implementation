Array.prototype.myMap = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('콜백은 반드시 함수여야 합니다');
    }
  
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
};
  
const numbers = [1, 2, 3];
console.log(numbers.myMap(num => num * 2));