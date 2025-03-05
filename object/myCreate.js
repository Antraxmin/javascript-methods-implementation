Object.myCreate = function (proto) {
    if (typeof proto !== 'object' && proto !== null) {
      throw new TypeError('객체 프로토타입은 객체나 null만 가능합니다');
    }
  
    function F() {}
    F.prototype = proto;
    return new F();
};
  
const personProto = { 
    greet() { 
        console.log('Hello!'); 
    } 
};

const personInstance = Object.myCreate(personProto);
personInstance.greet(); 