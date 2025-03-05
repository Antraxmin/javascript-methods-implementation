Array.prototype.mySort = function (compareFn) {
    if (typeof compareFn !== 'function') {
      compareFn = (a, b) => (String(a) > String(b) ? 1 : -1); 
    }
  
    function quickSort(arr) {
      if (arr.length <= 1) return arr;
  
      const pivot = arr[Math.floor(arr.length / 2)];
      const left = arr.filter(el => compareFn(el, pivot) < 0);
      const middle = arr.filter(el => compareFn(el, pivot) === 0);
      const right = arr.filter(el => compareFn(el, pivot) > 0);
  
      return [...quickSort(left), ...middle, ...quickSort(right)];
    }
  
    const sorted = quickSort([...this]); 
    this.length = 0;
    this.push(...sorted);
    return this;
};
  
const arr = [3, 1, 4, 1, 5, 9];
arr.mySort((a, b) => a - b);
console.log(arr); 
