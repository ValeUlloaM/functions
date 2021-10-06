//Examples

//Function type Expressions

let saludador: (a: string, b: string) => void; //Signature

saludador = (nombre: string, saludo: string) => { //Function type
    console.log(`${nombre} says ${saludo}`);
    console.log("Hola mundo");
}

let calculador: (a: number, b: number, c: string) => number; //Signature

calculador = (num1:number, num2:number, operacion:string) =>  { //Function type
 if(operacion === 'suma'){
     return num1 + num2;
 } else{
     return num1 - num2
 }
}

//Call signatures (Alias de tipo)

let humano: (persona: {nombre: string, edad: number}) => void;

type datos = {nombre: string, edad: number};

humano  = (empleado: datos ) =>  {
    console.log(`${empleado.nombre} tiene ${empleado.edad} años de edad`);
}



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




