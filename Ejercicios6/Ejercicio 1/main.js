function main() {

    do {
        (isRunning = true)
        var menu = prompt("Que quiere hacer? 1:Insertar datos, 2:Mostrar Datos, 3:Salir")
        if (menu == 1) {
            var arrays = lista()
        }

        if (menu == 2) {
            var datos_usuario = arrays
            alert_output(datos_usuario[0] + " Primera posicion ")
            alert_output(datos_usuario[1] + " Segunda posicion ")
            alert_output(datos_usuario[2] + " Tercera posicion ")
            alert_output(datos_usuario[3] + " Cuarta posicion ")
        }

        if (menu == 3) {
            isRunning = false
        }
    }
    while (isRunning)
}

main()