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
let guardarLocalStorage = () => {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLs", distancia);
    localStorage.setItem("unidadesLs", unidad);
    window.open("segundaWeb_copia.html");
}

/**
 * carga los valores de distancia y unidad almacenados en el local storage 
 * @method cargarLS
 */
let cargarLocalStorage = () => {
    const distancia = localStorage.getItem("distanciaLs");
    const unidad = localStorage.getItem("unidadesLs");
    document.getElementById("dist").value = distancia + " " + unidad;
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
 * asigna listener al canvas para poder dibujar
 * @method dibujar
 */
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

/**
 * Dibujar canvas cuadriculado
 * @method dibujarCuadriculado
 */
let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")

    const xmax = canvas.width
    const ymax = canvas.height
    const paso = 40

    ctx.strokeStyle = "#bbb9b9"
    // dibujo de lineas horizontales
    for (let i = paso; i < ymax; i += paso) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(xmax, i)
        ctx.stroke()
        ctx.closePath()
    }

    // dibujo de líneas verticales
    for (let i = paso; i < xmax; i += paso) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, xmax)
        ctx.stroke()
    }

    // dibujar eje X
    ctx.beginPath()
    ctx.moveTo(0, ymax/2)
    ctx.lineTo(xmax, ymax/2)
    ctx.strokeStyle = "#000000"
    ctx.stroke()
    ctx.closePath()

    // dibujar eje Y
    ctx.beginPath()
    ctx.moveTo(xmax/2, 0)
    ctx.lineTo(xmax/2, ymax)
    ctx.strokeStyle = "#000000"
    ctx.stroke()
    ctx.closePath()

    // numeros eje x
    let numx=-20;
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "blue";
    for(let i=0;i<xmax;){
        ctx.fillText(String(numx),i,ymax/2);
        i += 20;
        numx++;
    }

    // numeros eje y
    let numy = -15;
    for(let i=0;i<ymax;){
        ctx.fillText(String(numy),xmax/2,i);
        i += 20;
        numx++;
    }
}

/**
 * Dibuja una imagen en las coordenadas ingresadas por el usuario
 * @method dibujarImagen
 * @param posX posicion X de la imagen
 * @param posY posicion Y de la imagen
 */
let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;


    img.onload = function (){
        const width = this.naturalWidth;
        const height = this.naturalHeight;
        console.log(width, height);

        if(posY<0 || posX<0){
            openDialog();
        }else if(canvas.width-width<posX || canvas.height-height<posY){
            openDialog();
        }else{
            ctx.drawImage(img, posX, posY);
        }
    }
}

/** 
 * @method openDialog
 * Muestra el dialogo de error
 */
let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * Cierra el dialogo de error
 * @method closeDialog
 */
let closeDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

x=0; 
dx=2;
/**
 * dibuja un auto de izquierda a derecha del canvas en un intervalo de 30 seg
 * @method animarAuto
 */
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

var intervalId;
let detenerAuto = () => {
    console.log("Se detuvo el auto")
    clearInterval(intervalId); // Detener la animación
}

let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 6000);
}

let animarNuevo = () => {
  setTimeout(cancelarAnimacion, 6000);
  requestAnimationFrame(animarAuto);
}

let cancelarAnimacion = () => {
  cancelAnimationFrame(animationId); // Cancelar la animación utilizando el ID almacenado
};
