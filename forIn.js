// for...in
var person = {
    name: 'Rodrigo',
    age: 30,
    weight: 80
};
for (var property in person) {
    console.log(property);
    console.log(person[property]);
}
