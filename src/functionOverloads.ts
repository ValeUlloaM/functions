//Function Overloads

function cedula(): number; //Sobrecarga
function cedula(quantity: number): number; //Sobrecarga
function cedula (quantity?: number): number | number[]{ //Funcion de implementacion
    if(!quantity) return Math.random()

    const arr = []
    for(let i = 0; i < quantity; i++){
        arr.push(Math.random())
    }

    return arr
}

console.log(cedula());
console.log(cedula(3));


let number1: number
number1 = cedula() //Se puede asignar sin problema a la variable gracias al overload