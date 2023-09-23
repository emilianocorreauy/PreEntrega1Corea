// Venta de yerba por kilo
// variables globales


const yerba = 100
const yerbaSuave = 159
const yerbaYuyos = 300

let cantidad; 
let marcaAlimento;
let resultado;

//operacion multiplicar
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}
//Solicitar información sobre cantidad

while (cantidad != 0){
    cantidad = parseInt(prompt("Ingresar cantidad de paquetes de yerba que desea comprar, recordando que 0 termina la carga"));
    
    if (cantidad === 0){
        break;
    }

    marcaAlimento = prompt("Ingrese la marca de alimento que desee:\n\ -Si quiere yerba marca Sara ingrese = Sara \n\ -Si quiere yerba marca Canarias ingrese = Canarias \n\ -Si quiere yerba marca El Moncayo ingrese = El Moncayo");
     
    switch (marcaAlimento){
        case "Sara":
           resultado = multiplicar(yerba, cantidad);
           alert("Debe abonar $ "+ resultado + " por su compra de yerba Sara");
           break;
        case "Canarias":
            resultado = multiplicar(yerbaSuave, cantidad);
            alert("Debe abonar $ "+ resultado + " por su compra de yerba Canarias");
            break;
        case "El Moncayo":
            resultado = multiplicar(yerbaYuyos, cantidad);
            alert("Debe abonar $ "+ resultado+ " por su compra de yerba El Moncayo");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }

    if (cantidad >= 10 ){
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >=5 ){
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
}