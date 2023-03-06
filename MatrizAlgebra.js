var operacionesLabelHTML = document.getElementById("operaciones")
var resultadoLabelHTML = document.getElementById("resultado")
function multiplicacionMatricesTest() {
    var matrizA = [[1 / 2, 2 / 5],
[3 / 4, 3 / 2]]

var matrizB = [[6 / 7, 10 / 3, 1 / 3],
[1 / 3, -2 / 6, 1 / 4]]


console.log("Ejecutando> ");
var matrizR = multiplicarMatrices(matrizA, matrizB)
imprimirMatriz(matrizR, "AB")
}

/*
let matrizAB = (multiplicacionMatrices(matrizA, matrizB));
imprimirMatriz(matrizAB);
console.log(matrizAB);
*/

function multiplicacionMatrices() {
    
    let filaA= parseInt(prompt("Ingresa el tamanio de filas para la matriz A"))
    let columnaA=parseInt(prompt("Ingresa el tamanio de columnas para la matrizA"))
    let filaB= parseInt(prompt("Ingresa el tamanio de filas para la matriz B"))
    let columnaB=parseInt(prompt("Ingresa el tamanio de columnas para la matriz B"))

    if(!validarTamanios(columnaA, filaB)) return alert("Deben tener tamanio correctos A(m x n) B(n x k)  ")
    console.log("Se puede efectuar la operacion!");
    
    let matrizA =  ingresarMatriz(filaA, columnaA, "A")
    let matrizB = ingresarMatriz(filaB,columnaB,"B")

    let matrizAB = multiplicarMatrices(matrizA,matrizB)
    imprimirMatriz(matrizAB)
}




function ingresarMatriz(filaTamanio, columnaTamanio, nombreMatriz) {
    console.log(filaTamanio+" "+columnaTamanio);
    let matriz = new Array(filaTamanio);
    
    for (let i = 0; i < filaTamanio; i++) {
        matriz[i] = new Array(columnaTamanio);
    }


    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = prompt ("Ingresa el valor para la posicion "+ (i+1)+","+(j+1)+" de la matriz "+nombreMatriz);
        }
    }
    return matriz;
}
function validarTamanios(columnaA, filaB) {
    return  columnaA==filaB?true: false
    
}
function multiplicarMatrices(matrizA, matrizB) {
    
    var suma = 0;
    let matrizR = new Array(matrizA.length);
    for (let i = 0; i < matrizR.length; i++) {
        matrizR[i] = new Array(matrizB[0].length)
        
    }
    
    let operacionesString = ""
    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizB[i].length; j++) {
            for (let k = 0; k < matrizB.length; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
               // console.log(matrizA[i][k] + " * " + matrizB[k][j]);
                operacionesString +=matrizA[i][k].toFixed(2) + " * " + matrizB[k][j].toFixed(2) +" + "
            } matrizR[i][j] = suma;

            operacionesString = operacionesString.substring(0,operacionesString.length-2)+"  =  "+suma+"\n\n" 
            suma = 0;
        }
    }   

    operacionesLabelHTML.innerText = ` ${operacionesString}`;
    return matrizR;
}
function imprimirMatriz(matriz, nombreMatriz) {
    let cadena= nombreMatriz + "\n";
    
    console.log("La matriz es: ");
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            cadena += (matriz[i][j]).toFixed(3) + ", ";
        }
        cadena = cadena.substring(0, cadena.length-2)+"\n";
    }
    
    resultadoLabelHTML.innerText = ` ${cadena}`
    console.log(nombreMatriz);
    console.log(cadena);
}

function leyAsociativa() {
    /*

    
    //Testing

    let matrizA = [[1/2,2/5],
                    [3/4,3/2]]
    let matrizB = [[6/7,10/3,1/3],
                    [1/3,-2/6,1/4]]

    let matrizC = [[3/2,1,-1/4],
                    [7/3,-1/3,0],
                    [1/6,1/2,1/5]]
    */
    
                    let filaA= parseInt(prompt("Ingresa el tamanio de filas para la matriz A"))
                    let columnaA=parseInt(prompt("Ingresa el tamanio de columnas para la matrizA"))
                    let filaB= parseInt(prompt("Ingresa el tamanio de filas para la matriz B"))
                    let columnaB=parseInt(prompt("Ingresa el tamanio de columnas para la matriz B"))
                    let filaC= parseInt(prompt("Ingresa el tamanio de filas para la matriz C"))
                    let columnaC=parseInt(prompt("Ingresa el tamanio de columnas para la matriz C"))

                    if(!validarTamanios(columnaA, filaB)) return alert("Deben tener tamanio correctos A(m x n) B(n x k)  ")
                    if(!validarTamanios(columnaB,filaC))return alert("Deben tener tamanio correctos A(m x n) B(n x k)  ")
                    console.log("Se puede efectuar la operacion!");
                    
                    let matrizA =  ingresarMatriz(filaA, columnaA, "A")
                    let matrizB = ingresarMatriz(filaB,columnaB,"B")
                    let matrizC = ingresarMatriz(filaC,columnaC,"C")
                  //  let matrizAB = multiplicarMatrices(matrizA,matrizB)
                  //  imprimirMatriz(matrizAB)
    
    
    //(AB)C = A(BC)
    let matrizAB_Izq = multiplicarMatrices(matrizA, matrizB)
    
    imprimirMatriz(matrizAB_Izq, "matriz AB izquierda")
    let matrizABC_Izq = multiplicarMatrices(matrizAB_Izq, matrizC)
    
    imprimirMatriz(matrizABC_Izq,"Matriz ABC izquierda = ")
    //derecha
    let matrizBC_Der = multiplicarMatrices(matrizB, matrizC)
    
    imprimirMatriz(matrizBC_Der,"Matriz BC derecha")
    let matrizABC_Der = multiplicarMatrices(matrizA, matrizBC_Der)
    
    imprimirMatriz(matrizABC_Der,"Matriz =ABC derecha")

    comprobarIgualdadMatrices(matrizABC_Izq, matrizABC_Der)

    function comprobarIgualdadMatrices(matriz1, matriz2) {
        for (let i = 0; i < matriz1.length; i++) {
            for (let j = 0; j < matriz1[0].length; j++) {
                //console.log(matriz1[i][j] + " "+matriz2[i][j]);
                if ((matriz1[i][j]).toFixed(4) != (matriz2[i][j]).toFixed(4)) {
                    return alert("ups! hubo un error")
                }
                
            }
            

        }
        return alert("Se cumple la ley")
    }
}