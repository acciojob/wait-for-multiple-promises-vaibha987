//your JS code here. If required.

let promise1 = new Promise((resolve) => {
  setTimeout(resolve, 1000 + Math.random() * 2000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(resolve, 1000 + Math.random() * 2000);
});

let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 1000 + Math.random() * 2000);
});

let bigPromise=Promise.all([promise1,promise2,promise3])
bigPromise.then(() => {
  console.log('All promises have resolved');
});