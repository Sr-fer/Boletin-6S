function main() {
  datos_arrays = azar()
  dato = datos()
  var pares = dato.filter(function (numero) {
    return numero % 2 == 0;
  });
  var impares = dato.filter(function (numero) {
    return numero % 2 != 0;
  });

  alert_output(dato)
  alert_output(pares)
  alert_output(impares)
}
main()