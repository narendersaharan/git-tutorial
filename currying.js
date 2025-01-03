// this function is an example of javascript function currying
function curryingSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

export default curryingSum;
