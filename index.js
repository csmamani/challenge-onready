class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  get marcaYModelo() {
    return `${this.marca} ${this.modelo}`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas, precio) {
    super(marca, modelo, precio);
    this.puertas = puertas;
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }
}

let vehiculos = [
  new Auto('Peugeot', '206', 4, 200000),
  new Moto('Honda', 'Titan', 250, 60000),
  new Auto('Peugeot', '208', 5, 250000),
  new Moto('Yamaha', 'YBR ', 160, 80500.5),
];

function listarVehiculos() {
  vehiculos.forEach((vehiculo) => {
    let { marca, modelo, puertas, cilindrada, precio } = vehiculo;
    console.log(
      `Marca: ${marca} // Modelo: ${modelo} // ${
        puertas ? 'Puertas: ' + puertas : 'Cilindrada: ' + cilindrada + 'cc'
      } // Precio: $${precio.toLocaleString()}`
    );
  });
}

function mostrarVehiculoMasCaro() {
  let vehiculosOrdenados = vehiculos.sort((a, b) => b.precio - a.precio);

  let resultado = vehiculosOrdenados[0];

  console.log(`Vehiculo mas caro: ${resultado.marcaYModelo}`);
}

function mostrarVehiculoMasBarato() {
  let vehiculosOrdenados = vehiculos.sort((a, b) => a.precio - b.precio);

  let resultado = vehiculosOrdenados[0];

  console.log(`Vehiculo mas barato: ${resultado.marcaYModelo}`);
}

function mostrarVehiculoConYEnLaMarca() {
  let resultado = vehiculos.filter((vehiculo) =>
    vehiculo.marca.includes('Y')
  )[0];

  console.log(
    `Vehículo que contiene en el modelo la letra ‘Y’: ${resultado.marcaYModelo}`
  );
}

function mostrarVehiculosOrdenados() {
  let vehiculosOrdenados = vehiculos.sort((a, b) => b.precio - a.precio);
  vehiculosOrdenados.forEach((vehiculo) => console.log(vehiculo.marcaYModelo));
}

listarVehiculos();

console.log('=============================');

mostrarVehiculoMasCaro();

mostrarVehiculoMasBarato();

mostrarVehiculoConYEnLaMarca();

console.log('=============================');

mostrarVehiculosOrdenados();
