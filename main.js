const existeElementoProducto = (array, productoReferencia) =>{
  let existe = array.some(elemento => elemento.producto === productoReferencia);
  return existe;
}

let encendido = true;
let productos = [];

class producto{
  constructor(){
    this.nombre = prompt("Ingrese el nombre del nuevo producto");
    this.cantidad = parseInt(prompt("Ingrese la cantidad del nuevo producto"));
    this.precio = parseFloat(prompt("Ingrese el precio del nuevo producto"));
  }
}

//Funciones agregar, mostrar y eliminar producto

const agregarProducto = (producto) => {
  productos.push(producto);
}

const mostrarProductos = () => {
  let nombresProductos = productos.map( producto => `Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: ${producto.precio}`);

  if(nombresProductos.length > 0) {
    alert(nombresProductos.join("\n"));
  } else {
    alert("No hay productos cargados");
  }
};

const eliminarUnProducto = (nombre) => {
  let existeElementoProducto = productos.some (producto => producto.nombre === nombre);

  if(existeElementoProducto(productos, nombre)) {
    productos = productos.filter(producto => producto.nombre !== nombre)
  } else {
    alert("No existe ningun producto con ese nombre")
  }
};

//Menú de opciones

const menuOpciones = () => {
  let encendido = true;

  while(encendido) {
    let opcion = parseInt(prompt(
      `Bienvenidos a nuestra app de control de stock
      
      1- Agregar un producto
      2- Mostrar un producto
      3- Quitar un producto
      4- Salir
      `))

  switch (opcion) {
    case 1:
      productos.push(new producto());
      alert("Se ha agregado un nuevo producto");
      break;

    case 2:
      mostrarProductos();
      break;

    case 3:
      let nombreProducto = prompt("Ingrese el nombre del producto a eliminar");
      eliminarUnProducto(nombreProducto);
      alert(`Se ha eliminado el producto ${nombreProducto}`);
      break;
    
    case 4:
      encendido = false;
      break;

    default:
      alert("Ingrese una opción válida");
      break;
  }
  }
}

menuOpciones();