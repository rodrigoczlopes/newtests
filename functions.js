

// function createPhrases () {

//     console.log('frase criada')
// }

// //chamar function

// createPhrases()

// console.log('fim.')

// //parameters 
// const sum = function (number1, number2){
//         let total = number1 + number2
//         return total

// }

// let number1 = 34
// let number2 = 20

// console.log(sum(number1, number2))

//function scope
// let subject = 'create video'

// function createThink( subject){
//           subject = 'study'
//           return subject
// }

// console.log(subject)
// console.log(createThink(subject))
// console.log(subject)
/////////////////////////////////////////////////////////////////////////////////////////////////////
//arrow function

// const sayMyName = () =>{
//       console.log('rodrigo')
// }

// sayMyName()

// callback function

// function sayMyName(name){
//   console.log('antes de executar a funcao callback')

//   name()

//   console.log('depois de executar a callback')
// }

// sayMyName(
//   () => {
//     console.log('estou em uma callback')
//   }
// )

//////////////////////////////////////////////////////////////

// Funcion () constructor 

// *expressão new automáticamente retorna em objeto
// *criar um novo objeto 
// *this keyword


// function Person(name) {
//         this.name = name 
//         this.walk = function(){
//           return  this.name + " está andando"
//         }

// }
// const rodrigo = new Person("Rodrigo")
// const joao = new Person("Joao")
// console.log(rodrigo.walk())
// console.log(joao.walk())
