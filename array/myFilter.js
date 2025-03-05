Array.prototype.myFilter = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('콜백은 반드시 함수여야 합니다');
    }
  
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
};
  
console.log(numbers.myFilter(num => num > 1));                                                                                                                                                                                                                                                           