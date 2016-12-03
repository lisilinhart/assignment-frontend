export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {
  class HelloWorld {
    constructor(val) {
      this.hello = val
    }
    
    say() {
      return this.hello
    }
  }

  let hello = new HelloWorld(val)
  return hello.say();
}
