const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // So now this promise takes five seconds before it's resolved or rejected.
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};
makeDogPromise()
  .then(() => {
    console.log("YAY WE GOT A DOG!!!!");
  })
  .catch(() => {
    console.log(":( NO DOG");
  });
//   we can chin.then and .catch together without having to create
//  a variable or without having to reference that makeDogPromise again.
