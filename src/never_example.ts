// Typescript cuenta con un tipo de dato never el cual representa el valor que nunca ocurre.

// Aquellas funciones que se definan con tipo de dato de retorno never no podrán alcanzar el final de la misma.

function NeverExample(): never {
    while (true){
        console.log("Never")
    }
}

let example: never = NeverExample();

console.log(example);

// Otro ejemplo:

function throwError(): never {
    throw new Error("Never")
}
