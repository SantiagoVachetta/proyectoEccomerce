
const d = document;
let carritoLleno = []

const carrito = d.getElementById("carrito")
console.log(carrito)
const arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
console.log(arrayCarrito)
const productsCart = () => {
    arrayCarrito.forEach(producto => {
        const { nombre, precio, id, img, stock,  } = producto
        carrito.innerHTML +=
            `
        <div class="card" >
        <img src=${img} alt="">
        <h3>${nombre}</h3>
        <span>${precio}</span>
     
       
        
        </div>
        
 `
    })
}


productsCart()

const finalizarCompra = () => {
    const button = document.querySelector(".finalizar-compra");
    button.addEventListener("click", () => {
        




        Swal.fire({
            title: 'Gracias por tu Compra!',
            
            icon: 'warning',
            showCancelButton:true ,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText : 'Cancelar',
            confirmButtonText: 'Volver al Inicio'
        }).then((result) => {
            if (result.isConfirmed) {

                window.location = "/index.html"
                localStorage.removeItem("carrito")
                
            }
        })


    })
}
finalizarCompra()





const total = () => {
    const $total = document.querySelector(".total")
    const subtotal = arrayCarrito.reduce((acc, item) => item.precio + acc, 0)
    localStorage.setItem("total", subtotal);

    const newTotal = localStorage.getItem("total");

    $total.innerHTML = `<h1>$${newTotal}</h1>`

}
total()

// const quantity = () => {
//     const $quantity = document.querySelector(".quantity")

//     const cantidad = JSON.parse(localStorage.getItem("carrito"))
//     console.log(cantidad.length)
//     $quantity.innerHTML = `${cantidad.length} `
// }
// quantity()






























//let carrito = {
//    productos: JSON.parse(localStorage.getItem("carrito")),

//     total: ()=>{
//         //logica
//         let array = carrito.productos;

//         let resultado = array.reduce((accion, el)=>accion + Number(el.precio) * Number(el.cantidad));
//         let h2 = document.createElement("h2");
//         h2.textContent = resultado;

//         document.querySelector8("#carrito").appendchild(h2)
//     },

//     generarHtml: function(){
//         let array = carrito.productos
//        generarCards(array)
//     }

// }

