const willGetYouADog = new Promise((resolve, reject) => {
  // So if we don't reject or resolve a promise its value or its status will be pending.
  //  resolve and reject are functions
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog.then(() => {
  // this dot then method will run if our promise is resolved.
  console.log("YAY WE GOT A DOG!!!!");
});
willGetYouADog.catch(() => {
  //this code will be executed if promise is rejected
  console.log(":( NO DOG");
});
