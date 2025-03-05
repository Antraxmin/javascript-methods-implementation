Object.myFreeze = function (obj) {
    Object.keys(obj).forEach(key => {
      Object.defineProperty(obj, key, {
        writable: false,     
        configurable: false  
      });
    });
  
    return obj;
};
  
const frozenObj = Object.myFreeze({ a: 1 });
frozenObj.a = 10; 
console.log(frozenObj.a); 