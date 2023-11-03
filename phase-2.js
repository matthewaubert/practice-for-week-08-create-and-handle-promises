function stretch(timeLeft) {
  const timeToAct = 1000;
  return new Promise((resolve, reject) => {
    if (timeLeft >= timeToAct) {
      setTimeout(() => {
        console.log('done stretching');
        resolve(timeLeft - timeToAct);
      }, timeToAct);
    } else {
      reject('Error: you don\'t have enough time to stretch');
    }
  });
}


function runOnTreadmill(timeLeft) {
  const timeToAct = 500;
  return new Promise((resolve, reject) => {
    if (timeLeft >= timeToAct) {
      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft - timeToAct);
      }, timeToAct);
    } else {
      reject('Error: you don\'t have enough time to run on treadmill');
    }
  });
}


function liftWeights(timeLeft) {
  const timeToAct = 2000;
  return new Promise((resolve, reject) => {
    if (timeLeft >= timeToAct) {
      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft - timeToAct);
      }, timeToAct);
    } else {
      reject('Error: you don\'t have enough time to lift weights');
    }
  });
}


function workout(totalTime) {
  stretch(totalTime)
  .then(time => runOnTreadmill(time))
  .then(time => liftWeights(time))
  .then((time) => console.log(`done working out with ${time / 1000} seconds left`))
  .catch(msg => console.error(msg));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left