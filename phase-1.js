function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done stretching');
    }, 1000);
  }).then(msg => console.log(msg));
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done running on treadmill');
    }, 500);
  }).then(msg => console.log(msg));
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done lifting weights');
    }, 2000);
  }).then(msg => console.log(msg));
}

function workout() {
  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => console.log('done working out'));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out