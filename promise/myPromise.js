class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onFulfilledCallbacks.forEach(fn => fn(value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn => fn(reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          resolve(onFulfilled(this.value));
        } else if (this.state === 'rejected') {
          reject(onRejected(this.reason));
        } else {
          this.onFulfilledCallbacks.push(() => resolve(onFulfilled(this.value)));
          this.onRejectedCallbacks.push(() => reject(onRejected(this.reason)));
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
}
  
const p = new MyPromise((resolve) => {
    setTimeout(() => resolve('Success!'), 1000);
});
  
p.then(value => console.log(value)); 