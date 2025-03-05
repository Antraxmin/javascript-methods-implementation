Object.myAssign = function (target, ...sources) {
    if (target == null) {
      throw new TypeError('undefined나 null은 객체로 변환할 수 없습니다');
    }
  
    target = Object(target);
  
    sources.forEach(source => {
      if (source != null) {
        Object.keys(source).forEach(key => {
          target[key] = source[key];
        });
      }
    });
  
    return target;
};
  
const obj1 = { a: 1 };
const obj2 = { b: 2 };
console.log(Object.myAssign(obj1, obj2)); 