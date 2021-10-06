//Examples

//Function type Expressions

let saludador: (a: string, b: string) => void; //Signature

saludador = (nombre: string, saludo: string) => { //Function type
    console.log(`${nombre} says ${saludo}`);
}

let calculador: (a: number, b: number, c: string) => number; //Signature

calculador = (num1:number, num2:number, operacion:string) =>  { //Function type
 if(operacion === 'suma'){
     return num1 + num2;
 } else{
     return num1 - num2
 }
}




