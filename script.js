function name() {
    var name = prompt(`What is your name?`)
    return name
}

function nameresponse(y) {
    alert(`Hello, ${y}`)
}

nameresponse(name())

function random() {
    var random = Math.floor(Math.random() * 11)
    return random
}

function user(x) {
  
    do { 
      var x = random()
      var math1 = (math1 + x)
      alert(`You drew ${x}. Your new total is ${math1}`)
      console.log(x)  
      user(random())
    } while (math1 < 1)
  
}
  



user(random())
  