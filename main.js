    function tiendaOnline () {
        
        
        let compras =true
        let total = 0

        do {
            let producto = prompt("Elegi un producto\n1. Remera ($6000)\n2. Pantalón ($17000)\n3. Buzo ($12000)\n4. Finalizar\n5 Salir")

            if (producto === "1"){
                total += 6000;
                alert("Agregaste una remera al carrito. Total: $" + total);
            } else if(producto === "2"){
                total += 17000;
                alert("Agregaste un pantalón al carrito. Total $" + total);
            } else if(producto === "3"){
                total += 12000;
                alert("Agregaste un buzo al carrito. Total $" + total);
            } else if(producto === "4"){
                alert("El total de tu compra es de $" + total);
                compras = false;
            } else if(producto === "5"){
                compras = false;
                alert("Esperamos que vuelvas pronto")
            }
            else {
                alert("Opción no valida, intenta de nuevo")
            }

        }while(compras)

    }

    tiendaOnline();

    