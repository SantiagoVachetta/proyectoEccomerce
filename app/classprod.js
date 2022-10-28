export class Producto {
    constructor(nombre, precio, img, id, descrip) {
        this.nombre = nombre,
            this.precio = precio,
            this.img = img;
        this.id = id,
            this.descrip = this.descrip



    }


    //metodos

    sumarCantidad = () => {
        return this.cantidad++
    }
}
