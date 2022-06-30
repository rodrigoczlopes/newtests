// Expressões e Operadores 


// Expressions 
//Operators
  //Binary
  //Unary
  //Ternary

  let number = 1

  console.log(number  + 1)

  /////////////////////////////////

  /*
  new 

  ** left-hand-side expression
  **Criar um novo objeto
  */

  let name = new String('Rodrigo')
  name.surName = "Lopes"
  let age = new Number(260)
  console.log(name,age)

  /////////////////////////////////

  /* 
  Operadores unários
  Typeof
  delete 
  */

  const person = {
    name: 'Rodrigo',
    age: 25
  }
  delete person.age

console.log(person)