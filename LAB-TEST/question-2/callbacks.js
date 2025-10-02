//for resolves promise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("message: delayed success!");
        }, 500);
    });

};
 //for reject promise
  const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("error: delayed exception!");
    }, 500);
  });
};

resolvedPromise()
.then((message) => console.log(message))
.catch((error) => console.error(error));

rejectedPromise()
.then((message) => console.log(message))
.catch((error) => console.error(error));