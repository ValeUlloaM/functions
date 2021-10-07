// Typescript  permite la definición de datos de tipo función que se
// caracterizan por recibir unos definidos parametros y un definido tipo de retorno

let suma: (x: number, y: number) => number =
    function(x: number, y: number) {
        return x + y;
    };

console.log(suma(1,2));