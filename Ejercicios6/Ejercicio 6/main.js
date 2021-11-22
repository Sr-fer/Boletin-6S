function main() {
    do {
        (isRunning = true)
        var interfaz = prompt("Que quiere hacer? 1:Crear perfil, 2:Borrar, 3:Modificar, 4:Mostrar un perfil, 5:Mostrar todos los perfiles, 6:Salir")
        var perfiles = perfiles_usuarios()
        if (interfaz == 1) {
            var slot = prompt("Donde quiere hacer el perfil? 1, 2, 3, 4, 5")
            if (slot == 1) {
                var perfil1 = perfil_usuario()
                perfil1.setnombre()
                perfil1.setapellidos()
                perfil1.setdireccion()
                perfil1.setemail()
                perfiles.push([0])
            }
            if (slot == 2) {
                var perfil2 = perfil_usuario()
                perfil2.setnombre()
                perfil2.setapellidos()
                perfil2.setdireccion()
                perfil2.setemail()
                perfiles.push([1])
            }
            if (slot == 3) {
                var perfil3 = perfil_usuario()
                perfil3.setnombre()
                perfil3.setapellidos()
                perfil3.setdireccion()
                perfil3.setemail()
                perfiles.push([2])
            }
            if (slot == 3) {
                var perfil4 = perfil_usuario()
                perfil4.setnombre()
                perfil4.setapellidos()
                perfil4.setdireccion()
                perfil4.setemail()
                perfiles.push([3])
            }
            if (slot == 3) {
                var perfil5 = perfil_usuario()
                perfil5.setnombre()
                perfil5.setapellidos()
                perfil5.setdireccion()
                perfil5.setemail()
                perfiles.push([4])
            }
            if (interfaz == 2)
                var borrar = prompt("Que perfil quieres borrar  perfil1  perfil2  perfil3  perfil4  perfil5")
            if (borrar = perfil1 || [0])
                perfil1 = 0
            if (borrar = perfil2 || [1])
                perfil2 = 0
            if (borrar = perfil3 || [2])
                perfil3 = 0
            if (borrar = perfil4 || [3])
                perfil4 = 0
            if (borrar = perfil5 || [4])
                perfil5 = 0

            if (interfaz == 3) {

                var which = prompt("Que perfil quieres cambiar? 1:perfil1, 2:perfil2, 3:perfil3, 4:perfil5 o 5:perfil5")
                if (which == 1) {
                    perfil1.setnombre(prompt(" Introduce el nuevo nombre "))
                    perfil1.setapellidos(prompt(" Introduce los nuevos apellidos "))
                    perfil1.setdireccion(prompt(" Introduce la nueva direccion "))
                    perfil1.setemail(prompt(" Introduce el nuevo email "))

                }
                if (which == 2) {
                    perfil2.setnombre(prompt(" Introduce el nuevo nombre "))
                    perfil2.setapellidos(prompt(" Introduce los nuevos apellidos "))
                    perfil2.setdireccion(prompt(" Introduce la nueva direccion "))
                    perfil2.setemail(prompt(" Introduce el nuevo email "))

                }
                if (which == 3) {
                    perfil3.setnombre(prompt(" Introduce el nuevo nombre "))
                    perfil3.setapellidos(prompt(" Introduce los nuevos apellidos "))
                    perfil3.setdireccion(prompt(" Introduce la nueva direccion "))
                    perfil3.setemail(prompt(" Introduce el nuevo email "))

                }
                if (which == 4) {
                    perfil4.setnombre(prompt(" Introduce el nuevo nombre "))
                    perfil4.setapellidos(prompt(" Introduce los nuevos apellidos "))
                    perfil4.setdireccion(prompt(" Introduce la nueva direccion "))
                    perfil4.setemail(prompt(" Introduce el nuevo email "))

                }
            }
            if (which == 5) {
                perfil5.setnombre(prompt(" Introduce el nuevo nombre "))
                perfil5.setapellidos(prompt(" Introduce los nuevos apellidos "))
                perfil5.setdireccion(prompt(" Introduce la nueva direccion "))
                perfil5.setemail(prompt(" Introduce el nuevo email "))

            }
            if (interfaz == 4) {
                var ver = prompt("Que perfil quieres ver?1:perfil1, 2:perfil2, 3:perfil3, 4:perfil5 o 5:perfil5")
                if (ver == 1 || [0]) {
                    alert(perfil1.getnombre())
                    alert(perfil1.getapellidos())
                    alert(perfil1.getdireccion())
                    alert(perfil1.getemail())
                }
                if (ver == 2 || [1]) {
                    alert(perfil2.getnombre())
                    alert(perfil2.getapellidos())
                    alert(perfil2.getdireccion())
                    alert(perfil2.getemail())
                }
                if (ver == 3 || [2]) {
                    alert(perfil3.getnombre())
                    alert(perfil3.getapellidos())
                    alert(perfil3.getdireccion())
                    alert(perfil3.getemail())
                }
                if (ver == 4 || [3]) {
                    alert(perfil4.getnombre())
                    alert(perfil4.getapellidos())
                    alert(perfil4.getdireccion())
                    alert(perfil4.getemail())
                }
                if (ver == 5 || [4]) {
                    alert(perfil5.getnombre())
                    alert(perfil5.getapellidos())
                    alert(perfil5.getdireccion())
                    alert(perfil5.getemail())
                }
                if (interfaz == 5) {
                    console.log(perfil1.getnombre())
                    console.log(perfil1.getapellidos())
                    console.log(perfil1.getdireccion())
                    console.log(perfil1.getemail())
                    console.log(perfil2.getnombre())
                    console.log(perfil2.getapellidos())
                    console.log(perfil2.getdireccion())
                    console.log(perfil2.getemail())
                    console.log(perfil3.getnombre())
                    console.log(perfil3.getapellidos())
                    console.log(perfil3.getdireccion())
                    console.log(perfil3.getemail())
                    console.log(perfil4.getnombre())
                    console.log(perfil4.getapellidos())
                    console.log(perfil4.getdireccion())
                    console.log(perfil4.getemail())
                    console.log(perfil5.getnombre())
                    console.log(perfil5.getapellidos())
                    console.log(perfil5.getdireccion())
                    console.log(perfil5.getemail())
                }
                if (interfaz == 6) {
                    isRunning = false
                }
            }
        }
    }
    while (isRunning)
}


main()
