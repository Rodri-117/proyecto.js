let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito() {
    let selectProductos = document.getElementById('productoSeleccionado');
    let precio = parseFloat(selectProductos.value);
    let productoNombre = selectProductos.options[selectProductos.selectedIndex].text.split('$')[0].trim(); 

    if (!isNaN(precio) && precio > 0) {
        let productoExistente = carrito.find(item => item.nombre === productoNombre);
        
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({ nombre: productoNombre, precio, cantidad: 1 });
        }

        guardarCarrito();
        actualizarTotal();
        mostrarDetalleCarrito();
    }
}

function actualizarTotal() {
    let total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    document.getElementById('montoTotal').textContent = `Total: $${total}`;
}

function mostrarDetalleCarrito() {
    let listaCarrito = document.getElementById('detalleCarrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.nombre} x${item.cantidad}: $${item.precio * item.cantidad}`;
        
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
        botonEliminar.onclick = () => eliminarUnidad(index);
        
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

function calcularCuotas() {
    let selectCuotas = document.getElementById('cuotasSeleccionadas');
    let cuotas = parseInt(selectCuotas.value);
    let total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    let montoFinal = total;

    if (cuotas === 9) {
        montoFinal *= 1.2; 
    } else if (cuotas === 12) {
        montoFinal *= 1.4; 
    }

    let cuotaMensual = montoFinal / cuotas;
    document.getElementById('resultadoCuotas').textContent = 
        `Total con cuotas: $${montoFinal.toFixed(2)} (${cuotas} cuotas de $${cuotaMensual.toFixed(2)})`;
}

function eliminarUnidad(index) {
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
    } else {
        carrito.splice(index, 1);
    }
    guardarCarrito();
    actualizarTotal();
    mostrarDetalleCarrito();
}

function eliminarCompra() {
    carrito = [];
    localStorage.removeItem('carrito');
    document.getElementById('montoTotal').textContent = "Total: $0";
    document.getElementById('resultadoCuotas').textContent = "Total con cuotas: -";
    document.getElementById('productoSeleccionado').selectedIndex = 0;
    document.getElementById('cuotasSeleccionadas').selectedIndex = 0;
    document.getElementById('detalleCarrito').innerHTML = '';
}

document.getElementById('agregarProducto').addEventListener('click', agregarAlCarrito);
document.getElementById('cuotasSeleccionadas').addEventListener('change', calcularCuotas);
document.getElementById('eliminarCompra').addEventListener('click', eliminarCompra);

window.addEventListener('load', () => {
    mostrarDetalleCarrito();
    actualizarTotal();
});



/*
    class Prenda {
        constructor (id, nombre, precio, talle) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.talle = talle;
        }  
    }

    const inventario = [
        new Prenda(111, "Pantalon", 20000, "S"),
        new Prenda(222, "Remera", 8000, "M"),
        new Prenda(333, "Sudadera", 12000, "M"),
        new Prenda(444, "Campera", 25000, "L"),
    ];
    
    
    function filtrarPrendas(){
        let palabraClave = prompt ("buscar").trim().toUpperCase();
        let resultado = []

        resultado = inventario.filter((x) => x.nombre.toUpperCase() === palabraClave);
        if (resultado.length === 0) {
            let monto = Number(palabraClave);
            if (!isNaN(monto)) {
                resultado = inventario.filter(prenda => prenda.precio <= monto);
            }
        }
        if (palabraClave === "S" || palabraClave === "M" || palabraClave === "L" || palabraClave === "XL") {
            resultado = inventario.filter(prenda => prenda.talle.toUpperCase() === palabraClave);
        }        
        if (resultado.length > 0) {
            console.log("Resultados encontrados:", resultado);
        } else {
            alert("No se encontraron coincidencias.");
        }
    }

    filtrarPrendas();
    
    */

    /*
    
    
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

    */