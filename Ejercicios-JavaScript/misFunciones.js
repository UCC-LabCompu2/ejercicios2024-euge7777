/**
 * Conversor de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} value - El valor de los inputs de metrosm yardas, pies o pulgadas
 */
let cambiarUnidades = (nombre, valor) => {
    let valMetro, valPulgada, valPie, valYarda

    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }

    if (isNaN(valor)) {
        alert("El valor ingresado no es un número!")
        valMetro = ""
        valPulgada = ""
        valPie = ""
        valYarda = ""
    } else {
        if (nombre === "metro") {
            valMetro = valor
            valPulgada = valor * 39.3701
            valPie = valor * 3.28084
            valYarda = valor * 1.093
        } else if (nombre === "pulgada") {
            valMetro = valor * 0.0254
            valPulgada = valor
            valPie = valor * 0.08333
            valYarda = valor * 0.02777
        } else if (nombre === "pie") {
            valMetro = valor * 0.3048
            valPulgada = valor * 12
            valPie = valor
            valYarda = valor * 0.33333
        } else if (nombre === "yarda") {
            valMetro = valor * 0.9144
            valPulgada = valor * 36
            valPie = valor * 3
            valYarda = valor
        }
    }

    document.getElementById('metro').value = Math.round(valMetro*100)/100
    document.getElementById('pulgada').value = Math.round(valPulgada*100)/100
    document.getElementById('pie').value = Math.round(valPie*100)/100
    document.getElementById('yarda').value = Math.round(valYarda*100)/100
}

/**
 * Conversor de unidades de grados  radianes
 * @method convertirGR
 * @param {string} id - El id de los inputs de grados o radianes
 * @param {number} value - El valor de los inputs de grados o radianes
 */
function convertirGR (id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById(elementId="grados").value;
        rad = (grad*Nath.PI)/180;
    } else if (id=="radianes"){
        rad = document.getElementById(elementId="radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}

/**
 * Mostrar u ocultar un div
 * @method mostrar_ocultar
 * @param {string}valorMO - el  id del div que se desea mostrar / ocultar
 */
function mostrar_ocultar (valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    } else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

/**
* Sumar valores ingresados por el usuario
* @method calcularSuma
*/
let calcularSuma = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("sum_num1")[0].value)
    num2 = Number(document.getElementsByName("sum_num2")[0].value)
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2
}

/**
* Restar los valores ingresados por el usuario
* @method calcularResta
*/
let calcularResta = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("res_num1")[0].value)
    num2 = Number(document.getElementsByName("res_num2")[0].value)
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2
}

/**
* Multiplicar los valores por el usuario
* @method calcularMultiplicacion
*/
let calcularMultiplicacion = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("mul_num1")[0].value)
    num2 = Number(document.getElementsByName("mul_num2")[0].value)
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2
}

/**
* Dividir los valores ingresados por el usuario
* @method calcularDivision
*/
let calcularDivision = () => {
    let num1, num2
    num1 = Number(document.getElementsByName("div_num1")[0].value)
    num2 = Number(document.getElementsByName("div_num2")[0].value)
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2
}

/**
* carga los datos ingresados por el usuario al URL y pasa a la otra pagina 
* @method cargarWeb
*/
let cargarWeb = () => {
    let unit,cant, urlComb;
    cant = document.getElementById("distancia").value;
    unit = document.getElementsByName("unidades")[0].value;
    urlComb = ('segundaWeb.html#${cant}#${unit}');
    window.open(urlComb);
}

/**
* carga los resultados de la pagina basandosa en lo del URL 
* @method cargarResultado
*/
let cargarResultado = () => {
    let cant, unit, urlComb;
    urlComb = window.location.href;
    urlComb = UrlCompleta.split("#");
    cant = urlComb[1];
    unit = urlComb[2];
    document.getElementById("dist") ='${cant} ${unit}';
}

/**
* toma los valores de distancia y unidad, los almacena en el local storage y redirige hacia la segunda web
* @method guardarLS
*/
let guardarLS = () => {
    let cant, unit;
    unit = document.getElementsByName("unidades").value;
    cant = document.getElementById("distancia").value;
    LocalStorage.setItem("cantidad",cant);
    LocalStorage.setItem("unidad",unit);
    window.open("segundaWeb_copia.html");
}

/**
* carga los valores de distancia y unidad almacenados en el local storage 
* @method cargarLS
*/
let cargarLS = () => {
    let cant, unit;
    cant = LocalStorage.getItem("cantidad");
    unit = LocalStorage.getItem("unidad");
    document.getElementById("dist").value = '${cant} ${unit}';
}

/**
 * dibuja un círculo y un cuadrado en el canvas
 * @method dibujarCirCuad
 */
function dibujarCirCuad (){
    var canvas = getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#333899";
    ctx.fillRect (0, 0, 40, 40)

    ctx.fillArc (xMax/2, yMax/2, 20, 0, 2*Math.PI)
    ctx.stroke();
    ctx.fillStyle = "#8b4c99";
    ctx.fill();
}

/**
* canvas para dibujar
* @method dibujar
/*
var badera;
function dibujar (event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getCintext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {bandera=true};
    canvas.onmouseup = function () {bandera = false};

    if (bandera==true){
        ctx.fillRect (posX, posY, 5, 5);
        ctx.fill;
    }
}
/**
* Limpiar lo dibujado en el canvas
* @method limparCanvas
*/
function limpiarCanvas (){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getCintext("2d");

    canvas.width=canvas.width;
}
