Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('콜백은 반드시 함수여야 합니다');
    }
  
    let accumulator = initialValue ?? this[0];
    let startIndex = initialValue === undefined ? 1 : 0;
  
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
};
  
console.log([1, 2, 3].myReduce((acc, num) => acc + num, 0)); 