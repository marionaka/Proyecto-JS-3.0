function Producto(nombre, precio, stock, cantidadPedida, subtotal, img){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cantidadPedida = cantidadPedida;
    this.subtotal = subtotal;
    this.img = img
    this.restarStock = function(cantidadARestar){
        this.stock -= cantidadARestar
    }
}

// Funcion constructora de objetos

let producto1 = new Producto("Libro", 4000, 3200, 0, 0, "../media/Libro Logo 1.jpg")
let producto2 = new Producto("Ta-Te-Ti", 1500, 300, 0, 0, "../Media/juegos de madera.jpg")
let producto3 = new Producto("Remera", 2500, 350, 0, 0, "../Media/Palo astilla.jpg")
let producto4 = new Producto("Almanaque", 1800, 250, 0, 0, "../Media/Almanaque.jpg")
let producto5 = new Producto("Autito", 2900, 380, 0, 0, "../Media/Autitos madera.jpg")
let producto6 = new Producto("Remeras", 5000, 440, 0, 0, "../Media/Remera padre madre hijo.jpg")
let producto7 = new Producto("Planificado", 1000, 600, 0, 0, "../Media/Planificador.jpg")
let producto8 = new Producto("Juguete", 3000, 340, 0, 0, "../Media/Torre madera.jpg")
let producto9 = new Producto("Libros de cuentos", 7000, 280, 0, 0, "../Media/Cuentos infantiles.jpg")

//Productos

let listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

//Lista de productos
//Puedo saber cuantos productos tengo con esta lista haciendo listaProductos.length

let listaNombres = [] 

//Inicializo una lista de nombres de productos vacia

for(const producto of listaProductos){
    listaNombres.push(producto.nombre)
}

//A la lista le agrego los nombres de cada objeto con producto.nombre

console.log(listaNombres)

//Visualizo la lista de los nombres por consola

let mensaje = '';

for (let i = 0 ; i < listaNombres.length ; i++) {
    mensaje = mensaje + (i+1) + " " + listaNombres[i] + '\n';
}

//Genero el mensaje con la lista de productos disponibles y su respectivo numero

let catalogo = document.getElementById("catalogo")

for(const producto of listaProductos){

    let card = document.createElement("div")

    card.className = "card"

    card.innerHTML = `<img src="${producto.img}"></img><h4>${producto.nombre}</h2><p>Precio: $${producto.precio}</p>`

    catalogo.append(card)
}


/* let listaNombresConStock = []


let listaProductosConStock = listaNombres.filter((prod) => prod.stock > 0)

for(const producto of listaProductosConStock){
    listaNombresConStock.push(producto.nombre)
}

let mensaje1 = '';
for (let i = 0 ; i < listaNombresConStock.length ; i++) {
    mensaje1 = mensaje1 + (i+1) + " " + listaNombresConStock[i] + '\n';
}

prompt("lista con stock" + mensaje1) */



/* let producto1 = {
    nombre: "Libro",
    precio: 4000,
    stock: 3200,
    cantidadPedida: 0,
    subtotal: 0
}

let producto2 = {
    nombre: "Ta-Te-Ti",
    precio: 1500,
    stock: 300,
    cantidadPedida: 0,
    subtotal: 0
}

let producto3 = {
    nombre: "Remera",
    precio: 2500,
    stock: 350,
    cantidadPedida: 0,
    subtotal: 0
}

let producto4 = {
    nombre: "Almanaque",
    precio: 1800,
    stock: 250,
    cantidadPedida: 0,
    subtotal: 0
}

let producto5 = {
    nombre: "Autito",
    precio: 2900,
    stock: 380,
    cantidadPedida: 0,
    subtotal: 0
}

let producto6 = {
    nombre: "Remeras",
    precio: 5000,
    stock: 440,
    cantidadPedida: 0,
    subtotal: 0
}

let producto7 = {
    nombre: "Planificado",
    precio: 1000,
    stock: 600,
    cantidadPedida: 0,
    subtotal: 0
}

let producto8 = {
    nombre: "Juguete",
    precio: 3000,
    stock: 340,
    cantidadPedida: 0,
    subtotal: 0
}

let producto9 = {
    nombre: "Libros de cuentos",
    precio: 7000,
    stock: 280,
    cantidadPedida: 0,
    subtotal: 0
} */
// Objetos directamente declarados

let quiereContinuar = "no"
let valorPrecioTotal = 0

function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}

function precioTotal(){
        valorPrecioTotal = producto1.subtotal + producto2.subtotal + producto3.subtotal + producto4.subtotal + producto5.subtotal + producto6.subtotal + producto7.subtotal + producto8.subtotal + producto9.subtotal
        return 
}

function precioCantidadStock(numeroProductoSeleccionado, cantidadProductoSeleccionado){
    switch(numeroProductoSeleccionado){
        case "1":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto1.nombre + " es de " + producto1.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto1.stock){
                producto1.cantidadPedida = producto1.cantidadPedida + cantidadProductoSeleccionado
                producto1.subtotal = producto1.cantidadPedida * producto1.precio
                alert("La cantidad pedida de " + producto1.nombre + " es de " + producto1.cantidadPedida + " y el sub total de la compra de " + producto1.nombre + " es de " + producto1.subtotal)
                producto1.restarStock(producto1.cantidadPedida)
                break
            }else{
                alert("La cantidad pedida de " + producto1.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto1.stock + "  unidades de " + producto1.nombre)
                break
            }
        case "2":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto2.nombre + " es de " + producto2.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto2.stock){
                producto2.cantidadPedida = producto2.cantidadPedida + cantidadProductoSeleccionado
                producto2.subtotal = producto2.cantidadPedida * producto2.precio
                alert("La cantidad pedida de " + producto2.nombre + " es de " + producto2.cantidadPedida + " y el sub total de la compra de " + producto2.nombre + " es de " + producto2.subtotal)
                producto2.stock = producto2.stock - producto2.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto2.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto2.stock + "  unidades de " + producto2.nombre)
                break
            }
        case "3":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto3.nombre + " es de " + producto3.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto3.stock){
                producto3.cantidadPedida = producto3.cantidadPedida + cantidadProductoSeleccionado
                producto3.subtotal = producto3.cantidadPedida * producto3.precio
                alert("La cantidad pedida de " + producto3.nombre + " es de " + producto3.cantidadPedida + " y el sub total de la compra de " + producto3.nombre + " es de " + producto3.subtotal)
                producto3.stock = producto3.stock - producto3.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto3.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto3.stock + "  unidades de " + producto3.nombre)
                break
            }
        case "4":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto4.nombre + " es de " + producto4.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto4.stock){
                producto4.cantidadPedida = producto4.cantidadPedida + cantidadProductoSeleccionado
                producto4.subtotal = producto4.cantidadPedida * producto4.precio
                alert("La cantidad pedida de " + producto4.nombre + " es de " + producto4.cantidadPedida + " y el sub total de la compra de " + producto4.nombre + " es de " + producto4.subtotal)
                producto4.stock = producto4.stock - producto4.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto4.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto4.stock + "  unidades de " + producto4.nombre)
                break
            }
        case "5":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto5.nombre + " es de " + producto5.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto5.stock){
                producto5.cantidadPedida = producto5.cantidadPedida + cantidadProductoSeleccionado
                producto5.subtotal = producto5.cantidadPedida * producto5.precio
                alert("La cantidad pedida de " + producto5.nombre + " es de " + producto5.cantidadPedida + " y el sub total de la compra de " + producto5.nombre + " es de " + producto5.subtotal)
                producto5.stock = producto5.stock - producto5.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto5.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto5.stock + "  unidades de " + producto5.nombre)
                break
            }
        case "6":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto6.nombre + " es de " + producto6.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto6.stock){
                producto6.cantidadPedida = producto6.cantidadPedida + cantidadProductoSeleccionado
                producto6.subtotal = producto6.cantidadPedida * producto6.precio
                alert("La cantidad pedida de " + producto6.nombre + " es de " + producto6.cantidadPedida + " y el sub total de la compra de " + producto6.nombre + " es de " + producto6.subtotal)
                producto6.stock = producto6.stock - producto6.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto6.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto6.stock + "  unidades de " + producto6.nombre)
                break
            }
        case "7":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto7.nombre + " es de " + producto7.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto7.stock){
                producto7.cantidadPedida = producto7.cantidadPedida + cantidadProductoSeleccionado
                producto7.subtotal = producto7.cantidadPedida * producto7.precio
                alert("La cantidad pedida de " + producto7.nombre + " es de " + producto7.cantidadPedida + " y el sub total de la compra de " + producto7.nombre + " es de " + producto7.subtotal)
                producto7.stock = producto7.stock - producto7.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto7.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto7.stock + "  unidades de " + producto7.nombre)
                break
            }
        case "8":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto8.nombre + " es de " + producto8.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto8.stock){
                producto8.cantidadPedida = producto8.cantidadPedida + cantidadProductoSeleccionado
                producto8.subtotal = producto8.cantidadPedida * producto8.precio
                alert("La cantidad pedida de " + producto8.nombre + " es de " + producto8.cantidadPedida + " y el sub total de la compra de " + producto8.nombre + " es de " + producto8.subtotal)
                producto8.stock = producto8.stock - producto8.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto8.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto8.stock + "  unidades de " + producto8.nombre)
                break
            }
        case "9":
            if(cantidadProductoSeleccionado == 0){
                alert("El precio de " + producto9.nombre + " es de " + producto9.precio)
                break
            }else if(cantidadProductoSeleccionado <= producto9.stock){
                producto9.cantidadPedida = producto9.cantidadPedida + cantidadProductoSeleccionado
                producto9.subtotal = producto9.cantidadPedida * producto9.precio
                alert("La cantidad pedida de " + producto9.nombre + " es de " + producto9.cantidadPedida + " y el sub total de la compra de " + producto9.nombre + " es de " + producto9.subtotal)
                producto9.stock = producto9.stock - producto9.cantidadPedida
                break
            }else{
                alert("La cantidad pedida de " + producto9.nombre + " es mas de lo que tenemos. Al momento podemos ofrecerle " + producto9.stock + "  unidades de " + producto9.nombre)
                break
            }
        default:
            alert("No tenemos disponible ese producto")   
            break
    }

}

let quiereComprar = prompt("Desea comprar algun producto? \nResponda Si o No: ")
if(quiereComprar.toLowerCase() == "si"){
        do{
            let numeroProductoSeleccionado = prompt("Seleccione el numero del producto que desea comprar:\n" + mensaje) 
            //Menu de seleccion de producto

            precioCantidadStock(numeroProductoSeleccionado,0)

            let cantidadProductoSeleccionado = parseInt(prompt("Indique la cantidad que desee: "))
            //Consulta cuantos productos quiere, uso parseInt para que me guarde un valor numerico

            precioCantidadStock(numeroProductoSeleccionado,cantidadProductoSeleccionado)

            quiereContinuar = prompt("Desea comprar algun otro producto? \nResponda Si o No: ")
        } while (quiereContinuar.toLowerCase() == "si")
    precioTotal()
    alert("El precio total es: " + valorPrecioTotal)
    
}else{
    alert("Lo esperamos la proxima")
}

//1:31:39