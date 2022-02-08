//imprimir(SOMA)
let indice = 13
let soma = 0
let k = 0

while(k < indice){
   k = k + 1
   soma = soma + k
}

console.log(soma)

//Sequência de Fibonacci
function generateFunctionFibonacci(number){

  let fibonacci = []

    fibonacci[0] = 0
    fibonacci[1] = 1

  for(let indice = 2; indice < number; indice++){

  fibonacci[indice] = fibonacci[indice - 2] + fibonacci[indice -1]
  }

  return fibonacci;
  
}

let fNumber = generateFunctionFibonacci(10)
console.log(fNumber)


// Descubra a lógica e complete o próximo elemento:
function questionA(){

  let numbers = []
  numbers[0] = 1
  let maxNumber = 30
  let contage = 2

  for(let indice = 0; indice < maxNumber; indice = indice + contage){

    let operation = numbers[0] + indice
    console.log(operation)
  }

  }

let parameterNumber = questionA()



function questionB(){

  let numbers = []
  numbers[0] = 2
  let maxNumber = 64

  for(let indice = 2; indice <= maxNumber; indice = indice + indice){

    let operation = indice
    console.log(operation)
  }

}

let funcB = questionB()

function questionC(){

  let numbers = [0, 1, 4, 9, 16, 25, 36]
  let sequence = [1, 3, 5, 7, 9, 11]

  let operationLastNumber = numbers.pop()

  let lastNumberSequence = sequence.pop()
  lastNumberSequence = lastNumberSequence + 2

  let result = operationLastNumber + lastNumberSequence

  sequence.push(lastNumberSequence)
  console.log(result)

}

questionC()

function questionD(){

  let numbers = [4, 16, 36, 64]
  let rootNumbers = [] //Raíz dos números

  for(let indice = 0; indice < numbers.length; indice++){

    let root = Math.sqrt(numbers[indice])

    rootNumbers.push(root)
    
  }

  let lastNumber = rootNumbers.pop()
  lastNumber = lastNumber + 2
  
  let result = lastNumber * lastNumber
  console.log(result)
}

questionD()

function questionE(){

  let numbers = [1, 1, 2, 3, 5, 8]

  let lastNumber = numbers.pop()
  lastNumber = lastNumber + numbers[numbers.length - 1]

  console.log(lastNumber)
  
}

//questionE()

function questionF(){

  //Sequência númerica com base em um elemento não númerico
  //Lógica está na Primeira letra inicial dos números

  let numbers = [2, 10, 12, 16, 17, 18, 19]
  let numbersName = ['dois', 'dez', 'doze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']

  for(let indice of numbersName){

    let resultNameIsSame = indice[0]
    console.log(resultNameIsSame + " É o termo em comum")
    console.log("E o próximo número apenas que possui a letra D inicial é o número 200")
  }

}

questionF()

function question5(text){
    let valueVoid = '';

    for (let indice = text.length -1; indice >= 0 ; indice--){
      valueVoid += text[indice]
    }
    return valueVoid
    
    
}

console.log(question5("Testando a inversão"))