const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Animal = mongoose.model('Animal',
  new mongoose.Schema({ nombre: String, tipo: String })
);

const Personal = mongoose.model('Personal',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

module.exports = {
  Cliente: Cliente,
  Articulo: Articulo,
  Animal: Animal,
  Personal: Personal
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
