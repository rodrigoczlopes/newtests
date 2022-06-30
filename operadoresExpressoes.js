// Expressões e Operadores 
// Expressions 
//Operators
//Binary
//Unary
//Ternary
var number = 1;
console.log(number + 1);
/////////////////////////////////
/*
new

** left-hand-side expression
**Criar um novo objeto
*/
var name = new String('Rodrigo');
name.surName = "Lopes";
var age = new Number(260);
console.log(name, age);
/////////////////////////////////
/*
Operadores unários
Typeof
delete
*/
var person = {
    name: 'Rodrigo',
    age: 25
};
delete person.age;
console.log(person);
