/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function cambiarUnidades (id,value) {
    if (isNaN(value)) {
        alert('Se ingresó un valor inválido');
        document.lasUnidades.unid_metro.value = " ";
    } else if (id=="metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * value;
        document.lasUnidades.unid_pie.value = 3.28084 * value;
        document.lasUnidades.unid_yarda.value = 1.09361 * value;
    }
}
