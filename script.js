function name() {
    var name = prompt(`What is your name?`)
    return name
}

function nameresponse(y) {
    alert(`Hello, ${y}. This is a game of chance, you're trying to get closest to 20 without going over.`)
}

nameresponse(name())

function random() {
    var random = Math.floor(Math.random() * 11)
    return random
}



function user(x) {
  
random()
  
math1 = 0
  
  do {
     m = random()  
     math1 = (m + math1)
     var answer = prompt(`You drew ${m} and your new total is ${math1}. "Y" to keep drawing, "N" to quit.`)  
  } while (math1 <= 20 && answer == "Y" && answer != "N")
  
  return math1  
     
}

user()

alert(`Your total is ${math1}.`)



function comp(c) {
  
random()
  
math2 = 0
  
  do {
     v = random()  
     math2 = (v + math2)
     alert(`Computer drew ${v} and computers new total is ${math2}.`)  
  } while (math2 <= 16)
  
  return math2   
     
}

comp()

alert(`Computers total is ${math2}.`)

function comparing(x ,y) {
  if (math1 > 20 && math2 > 20) {
    alert(`Both of you lose!`)
  }
  
  if (math1 > math2 && math2 < 20 && math1 > 20) {
    alert(`Computer wins!`)
  }
  
  if (math2 > math1 && math1 < 20 && math2 > 20) {
    alert(`You win!`)
  }
  
  if (math1 > math2 && math2 < 20 && math1 < 20) {
    alert(`Computer wins!`)
  }
  
  if (math2 > math1 && math1 < 20 && math2 < 20)
    alert(`You win!`)
}

comparing()