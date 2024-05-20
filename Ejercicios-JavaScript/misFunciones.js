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
