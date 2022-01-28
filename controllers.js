const { Cliente, Articulo, Animales, Personal } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readCliente = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteCliente = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateCliente = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createCliente = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ ARTÍCULOS

exports.readArticulos = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArticulo = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArticulo = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateArticulo = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArticulo = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


// ------- ANIMALES

exports.readAnimales = (req, res) =>
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readAnimal = (req, res) =>
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteAnimal = (req, res) =>
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateAnimal = (req, res) =>
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createAnimal = (req, res) =>
    new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ PERSONAL

exports.readPersonas = (req, res) =>
    Articulo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readPersonal = (req, res) =>
    Articulo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deletePersonal = (req, res) =>
    Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updatePersonal = (req, res) =>
    Articulo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createPersonal = (req, res) =>
    new Articulo({ nombre: req.body.nombre, precio: req.body.precio })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

