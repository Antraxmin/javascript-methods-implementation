String.prototype.myTrim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};
  
console.log("   hello world  ".myTrim()); 