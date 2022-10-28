import { Producto } from "./app/classprod.js";
const $quantity = document.querySelector(".quantity")
console.log($quantity)
const arrayProductos = [];
const main = document.querySelector(".cont-productos")

const arrayCarrito = []


const getRequest = async () => {
    let req = await fetch("/productos.json")

    let response = await req.json()

    for (const el of response) {
        arrayProductos.push(el)
    }
    console.log(arrayProductos)
    localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
}



const generarCards = (array) => {
    console.log(arrayProductos)
    arrayProductos.forEach((element) => {
        let { nombre, precio, id, img, stock, descrip } = element;
        console.log(element)
        main.innerHTML += `
                    <div class="card" >
                    <img src=${img} alt="">
                    <h3>${nombre}</h3>
                    <span>${precio}</span>
                    <div class="descrip">${descrip}</div>
                    <button class="btn-agregar" data-id=${id}>Agregar al Carrito</button>
                    
                    </div>
                    
                    `


        eventoAgregarProducto()
    });

}




const eventoAgregarProducto = () => {
    let btns = document.querySelectorAll(".btn-agregar")

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            let id = event.target.attributes[1].value;

            let existe = arrayCarrito.findIndex(el => el.id == id)
            if (existe != -1) {
                let producto = arrayCarrito[existe]
                producto.sumarCantidad()
            } else {
                let resultado = arrayProductos.find(el => el.id == id)
                let producto = new Producto(resultado.nombre, resultado.precio, resultado.img, resultado.id);
                arrayCarrito.push(producto)
            }

            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))




        })
    }




}
// const inputFiltrar = () => {



//     input.addEventListener("input", (event) => {
//         sectionProductos.innerHTML = ""
//         let resultado = arrayProductos.filter(el => el.nombre.includes(event.target.value));
//         console.log(resultado)
//         if (resultado.length > 0) {
//             generarCards(resultado)
//         }
//         else {
//             sectionProductos.innerHTML = `<h1>No se encontro el producto</h1>`
//         }
//     })

// inputFiltrar()









// }








//programa


document.addEventListener("DOMContentLoaded", async () => {

    await getRequest(),
        generarCards()

})