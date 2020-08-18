const db = require("../database/models");
let path= require("path");
const fs = require('fs');


let productosController = {
    principal: function(req,res){
        res.render("productos")
    },  

    crear: function(req, res){
        db.Categoria.findAll()
        .then(function(categoria){
            res.render("formularioDeCarga",{categoria:categoria});
        })
        

   }, 

   guardado: function(req,res){
       db.Product.create({
           nombre: req.body.nombre,
           precio: req.body.precio,
           categoria_id: req.body.categoria,
           descripcion: req.body.descripcion,
           imagen: req.files[0].filename

       });
       
       res.redirect("/productos/crear");
   },

   listado: function(req, res){
        db.Product.findAll()
            .then(function(productos){
               res.render("listadoProductos", {productos:productos});

            })

    },

    editar: function(req, res){
        db.Producto.findByPk(req.params.id)
            .then(function(productos){
                return res.render("editarProductos", {productos:productos});

            })
    
    },
    actualizar: function(req,res){
        db.Producto.update({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen
        },{
            where: {
                id: req.params.id
            }
        });
        res.redirect("/productos/crear");

    },
    borrar: function(req,res){
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        });
        res.redirect("/productos/crear");
    }   
    
    editarOtro: function(req, res){
        db.Producto.findByPk(req.params.id)
            .then(function(productos){
                return res.render("editarProductos", {productos:productos});

            })


}

module.exports = productosController;
