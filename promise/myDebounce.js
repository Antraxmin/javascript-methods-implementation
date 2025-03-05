function myDebounce(func, delay) {
    let timer;
    
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
}
  
const log = myDebounce(() => console.log('실행됨'), 1000);

log();
log();
log(); 