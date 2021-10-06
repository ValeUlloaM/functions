//Call signature (Alias de tipo)

let humano: (persona: {nombre: string, edad: number}) => void;

type datos = {nombre: string, edad: number};

humano  = (empleado: datos ) =>  {
    console.log(`${empleado.nombre} tiene ${empleado.edad} años de edad`);
}

humano({nombre: "Fernando", edad: 18});