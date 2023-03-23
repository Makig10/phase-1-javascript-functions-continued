// code your solution here
function saturdayFun(action='roller-skate'){
    return (`This Saturday, I want to ${action}`);
}

function mondayWork(action='go to the office'){
    return (`This Monday, I will ${action}`);

}
//console.log(function mondayWork(action='work from home'));


//const array = (function (thingToAdd) {
    //const base = 3;
    //return [
      //function () {
        //return base + thingToAdd;
      //},
      //function () {
        //return base;
      //},
   // ];
  //})(2);
 // array[0];
 // array[1];
 function wrapAdjective('*') {
    return function(adjective) {
      return `You are ${'*'}${adjective}${'*'}!`;
    }
  }