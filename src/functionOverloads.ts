//Function Overloads

function cedula(): number;
function cedula(quantity: number): number[];
function cedula (quantity?: number): number | number[]{ //Optional parameter
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