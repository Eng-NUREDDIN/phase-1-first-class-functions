function receivesAFunction(callbackFunction) {
    callbackFunction()
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("Hello I'm a Developer")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("perfect work")
    }
  }