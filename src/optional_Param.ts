
interface Carro {
    color: string
    marca: string
    año?: number
}

function propiedadesCarro (c: Carro):string {
    let datos = "Esta carro es de color" + " " + c.color + "," + "es de marca" + " " + c.marca
    if (c.año) {
        return datos + " " + "y es del año" + " " + c.año
    } else {
        return datos + " " + "y no conocemos el año del modelo"
    }
}
let carro:Carro= {color: "rojo", marca: "chevrolet", año: 2013}
console.log(propiedadesCarro (carro))
