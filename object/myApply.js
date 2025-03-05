Function.prototype.myApply = function (context, args = []) {
    if (typeof this !== 'function') {
      throw new TypeError('myApply는 함수에서만 호출되어야 합니다');
    }
  
    if (!Array.isArray(args)) {
      throw new TypeError('두 번째 인자는 배열이어야 합니다');
    }
  
    context = context || globalThis; 
    const fnKey = Symbol('fn'); 
    context[fnKey] = this; 
  
    const result = context[fnKey](...args);
    delete context[fnKey];
  
    return result;
};
  
greet.myApply(person, [30, 'Busan']);