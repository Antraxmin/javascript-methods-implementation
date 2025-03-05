function myThrottle(func, interval) {
    let lastExecuted = 0;
    
    return function (...args) {
      const now = Date.now();
      
      if (now - lastExecuted >= interval) {
        func.apply(this, args);
        lastExecuted = now; 
      }
    };
}

const logThrottle = myThrottle(() => console.log('Throttled!'), 1000);
setInterval(logThrottle, 300); 