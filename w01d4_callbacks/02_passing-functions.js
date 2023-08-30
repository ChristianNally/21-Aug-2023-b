// callback;
//   a function that gets passed to another function
//   to be invoked by that second function


// // higher order function (HOF)
// // a function that accepts another function as an argument

//                  1, console.log
function processor(arg1, callback){
  // does some stuff

  callback('Monkey Fuzz!');

}

processor(1, console.log );

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const sayHello2 = function(name) {
  console.log("sayHello2 logs:",`hola!! ${name}`);
  return;
};

const addTwo = function(num) {
  let output = num + 2;
  console.log('output', output);
  return output;
};

//            addTwo
function runMe(cb){
  return cb(4444);
}

runMe(sayHello2);
const collectedReturnValue = runMe(addTwo);
console.log('collectedReturnValue', collectedReturnValue);