//Objects, permite crear datos y ajustes para pasarlos dentro del codigo de manera mas eficiente
let perro = {
    nombre: 'Phillip',
    color: 'canela',
    raza: 'criollo',
    edad: 4
};

//Estos pueden ser modificados siempre y cuando se respete el valor de la función
perro.edad = 5; //number
perro.nombre = 'Alberto'; //String
//perro.raza = 6; <-- esto va a marcar un error


//Se puede modificar los valores del objeto creado inicialmente
perro = {
    nombre: 'Vicente',
    color: 'naranja',
    raza: 'Labrador',
    edad: 2
}

console.log(perro.nombre);