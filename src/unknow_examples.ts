//este es un ejemplo de como se implementa el tipo de función "unknown"
//En este caso va a funcionar en cualquier tipo de dato que se le da, por que se está indicando que el valor es desconocido
let value: unknown;

value = true;
value = 12;
value = "Hola mundo";
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
value = new TypeError();
value = Symbol("type");

//Otro ejemplo de la forma en que el unknown va a presentar error
//En este ejemplo si va a presentar un error por que al value se le está indicando con que tipo de funcion va a trabajar
let value2: unknown;

let value1: unknown = value2; // funciona
let value3: any = value2; // funciona
//let value4: boolean = value2; // No funciona
//let value5: number = value2; // No funciona
//let value6: string = value2; // No funciona
//let value7: object = value2; // No funciona
//let value8: any[] = value2; // No funciona
//let value9: Function = value2; // No funciona