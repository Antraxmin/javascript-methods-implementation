Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
      throw new TypeError('myCall은 함수에서만 호출되어야 합니다');
    }
  
    context = context || globalThis; 
    const fnKey = Symbol('fn'); 
    context[fnKey] = this; 
  
    const result = context[fnKey](...args);
    delete context[fnKey]; 
  
    return result;
  };
  
function greet(age, city) {
    console.log(`안녕하세요, 제 이름은 ${this.name}이고, ${age}살이며 ${city}에 살고 있습니다.`);
}
  
const person = { name: 'Antraxmin' };
greet.myCall(person, 25, '서울');