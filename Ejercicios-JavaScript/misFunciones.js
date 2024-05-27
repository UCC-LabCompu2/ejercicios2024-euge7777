/**
 * Conversor de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} value - El valor de los inputs de metrosm yardas, pies o pulgadas
 * @return 
 */
function cambiarUnidades (id,value) {
    if (isNaN(value)) {
        alert('Se ingresó un valor inválido');
        document.lasUnidades.unid_metro.value = " ";
    } else if (id=="metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * value;
        document.lasUnidades.unid_pie.value = 3.28084 * value;
        document.lasUnidades.unid_yarda.value = 1.09361 * value;
    } else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value = 0.0254 * value;
        document.lasUnidades.unid_pie = 0.0833 * value;
        document.lasUnidades.unid_yarda = 0.0277778 * value;
    } else if (id=="pie"){
        document.lasUnidades.unid_metro = 0.3048 * value;
        document.lasUnidades.unid_pulgada = 12 * value;
        document.lasUnidades.unid_yarda = 0.3333 * value;
    } else if (id=="yarda"){
        document.lasUnidades.unid_metro = 0.9144 * value;
        document.lasUnidades.unid_pulgada = 36 * value;
        document.lasUnidades.unid_pie = 3 * value;
    }
}
/**
 * Conversor de unidades de grados  radianes
 * @method convertirGR
 * @param {string} id - El id de los inputs de grados o radianes
 * @param {number} value - El valor de los inputs de grados o radianes
 * @return
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
 * @return
 */
function mostrar_ocultar (valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    } else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

function calcularSuma(){
    var num1, num2;
    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value=num1+Number(num2);

}

function calcularResta(){
    var num1, num2;
    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value=num1-Number(num2);
}

function calcularMultiplicacion (){
    var num1, num2;
    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].value=num1*Number(num2);
}

function calcularDivision (){
    var num1, num2;
    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].value=num1/Number(num2);


}
