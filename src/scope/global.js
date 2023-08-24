// variables

var a; //declaración de variable
var  b = 'b'; // declaración y asignación o inicialización de variable. 
b = 'bb'; // reasignando o reinicialización de variable
var a = 'aa'// redecalración

// Global scope
var fruit = 'apple'; //global

function bestFruit(){
    console.log(fruit);

}

bestFruit();

function countries () {
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);