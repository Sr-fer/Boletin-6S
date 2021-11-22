function main() {
  datos_arrays = azar()
  dato = datos()

  alert_output(dato.sort(function (prev, next) {
    if (prev > next) {
      return 1;
    }
    if (prev < next) {
      return -1;
    }
    return 0;
  }));
}
main()