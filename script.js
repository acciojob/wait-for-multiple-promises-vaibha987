let startTime = Date.now();

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    let timeTaken = Date.now() - startTime;
    resolve(timeTaken);
  }, 1000 + Math.random() * 2000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    let timeTaken = Date.now() - startTime;
    resolve(timeTaken);
  }, 1000 + Math.random() * 2000);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    let timeTaken = Date.now() - startTime;
    resolve(timeTaken);
  }, 1000 + Math.random() * 2000);
});

let bigPromise=Promise.all([promise1,promise2,promise3])

bigPromise.then((values) => {
  console.log('All promises have resolved');
  console.log('Time taken by promise1: ', values[0]);
  console.log('Time taken by promise2: ', values[1]);
  console.log('Time taken by promise3: ', values[2]);
  console.log('Total time taken: ', Date.now() - startTime);
});