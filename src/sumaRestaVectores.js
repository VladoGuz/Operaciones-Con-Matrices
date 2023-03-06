var operacionesLabelHTML = document.getElementById("operaciones")
var resultadoLabelHTML = document.getElementById("resultado")
function suma_resta_Vectores() {
    let elementos = validarEleccion()
    if(elementos[0])
    {
        let tamanioA = parseInt(prompt("Ingresa tamanio del vector A"))
        let tamanioB = parseInt(prompt("Ingresa tamanio del vector B"))
        if(tamanioA==tamanioB){
            let vectorA = rellenarVector(tamanioA)
            let vectorB = rellenarVector(tamanioB)
            elegirOperacion(vectorA, vectorB, elementos[1])
        }else alert("Ingresa las dimensiones correctas! (Deben tener el mismo tamanio)")
    }else alert("Ingresa las dimensiones correctas")

    
}


function eleccionDimension(vectorName) {
    let opcion= "";
while (opcion != "R" && opcion != "C") {
    opcion = prompt("Ingresa la dimension del "+vectorName+" \n R.- Renglon\n C.- columna\nS. Salir\n Nota: Solo puedes sumar o restar si tienen la misma dimension");
    
    if(opcion=="S") return -1;
    }
    
    return opcion;    
    
    
}
function validarEleccion() {
    let primerEleccion = eleccionDimension("VectorA")
    let segundoEleccion = eleccionDimension("VectorB")
    if(primerEleccion ==-1 || segundoEleccion == -1) {
        alert("Valor incorrecto")
        return}
    if((primerEleccion===segundoEleccion)){

        return [true, primerEleccion];
        
    }else {
        return false;
        
}
    
}
function rellenarVector(tamanio) {
    
    let vector= new Array(tamanio);
    

    for (let i = 0; i < vector.length; i++) {
        vector[i] = prompt("Ingresa un valor en la posicion " + (i+1))

    }
    return vector;
}

function sumaVectores(vectorA, vectorB) {
    let vectorR = new Array(vectorA.length)
    let operacionesString =""
    for (let i = 0; i < vectorA.length; i++) {
        
        vectorR[i] = parseFloat( vectorA[i] ) + parseFloat( vectorB[i]);
        operacionesString += vectorA[i] +" + " +vectorB[i] +" = "+vectorR[i]+"\n"
    }
    
    operacionesLabelHTML.innerText = ` ${operacionesString} \n`;
    return vectorR;
}
function restaVectores(vectorA, vectorB) {
    let vectorR = new Array(vectorA.length)
    let operacionesString =""
    for (let i = 0; i < vectorA.length; i++) {
        operacionesString += vectorA[i] +" + " +vectorB[i] +" = "+vectorR[i]+"\n"
        vectorR[i] = parseFloat(vectorA[i])- parseFloat (vectorB[i]);

    }
    operacionesLabelHTML.innerText = ` ${operacionesString} \n`;
    return vectorR;
}

function imprimirVector(vectorR, opcion) {
    console.log(opcion);
    let vectorString = ""
    if(opcion == "C"){

        for (let i = 0; i < vectorR.length; i++) {
            
            vectorString += vectorR[i] +" \n"
        }
    }else {
    for (let i = 0; i < vectorR.length; i++) {
            
        vectorString += vectorR[i] +", \t"
    }
}
resultadoLabelHTML.innerText = ` ${vectorString.substring(0,vectorString.length-2   )}`
    console.log("\n"+vectorString);
}

function elegirOperacion(vectorA, vectorB, dimension) {
    let opcion = ""

    while (opcion!="S" && opcion!="R") {
        
    
    opcion = prompt("Elige \nS para sumar A+B y \nR para restar A-B")
    switch (opcion) {
        case "S":
            imprimirVector( sumaVectores(vectorA, vectorB), dimension);
            break;
        case "R":
            imprimirVector(restaVectores(vectorA, vectorB), dimension);
            break;
        default:
            alert("Ingresa un valor correcto")
            break;
        }
    }
}
