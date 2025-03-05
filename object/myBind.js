Function.prototype.myBind = function (context, ...boundArgs) {
    if (typeof this !== 'function') {
      throw new TypeError('myBind는 함수에서만 호출되어야 합니다');
    }
  
    const fn = this; 
    return function (...args) {
      return fn.myCall(context, ...boundArgs, ...args);
    };
};
  
const boundGreet = greet.myBind(person, 35);
boundGreet('New York');
