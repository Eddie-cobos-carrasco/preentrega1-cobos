//prompt saludo

let saludoNombre = prompt('Ingrese su nombre');
alert('Bienvenido ' + saludoNombre)

//clase 5 objetos

const peluches = [];

const peluche1 = {
    nombre: 'pinwino',
    tamano: 1,
    stock: true,
    precio: 1
}

const peluche2 = {
    nombre: 'bobbasponja',
    tamano: 2,
    stock: true,
    precio: 2
}

const peluche3 = {
    nombre: 'amogus',
    tamano: 2,
    stock: false,
    precio: 3
}
condicion

function sumar() {
    let sum = 0;
    const peluches = [peluche1, peluche2, peluche3];
    for (const peluche of peluches) {
        if (peluche.stock) {
            sum += peluche.precio;
        }
    }
    return sum;
}

//console.log(sumar());
