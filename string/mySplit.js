String.prototype.mySplit = function (delimiter) {
    if (delimiter === undefined) return [this.toString()];
    if (delimiter === '') return [...this];
  
    const result = [];
    let current = '';
  
    for (let i = 0; i < this.length; i++) {
      if (this.substring(i, i + delimiter.length) === delimiter) {
        result.push(current);
        current = '';
        i += delimiter.length - 1; 
      } else {
        current += this[i];
      }
    }
  
    result.push(current);
    return result;
};
  
console.log("hello world".mySplit(" ")); 
console.log("abc".mySplit("")); 