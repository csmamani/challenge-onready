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
