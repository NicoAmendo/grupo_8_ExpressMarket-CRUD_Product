const fs = require('fs');
const path = require('path');


const productsController = {
    principal: (req,res) => {
        console.log(almacen);
        res.render('products', {
              
            products: almacen
              
          });
      },
      detail: (req, res) => {
          let categoria = req.params.categoria;
          let pdtoID = req.params.id;
          let productFind = null;
  
          if (categoria == 'almacen') {
              productFind = almacen.find(pdto => pdto.id == pdtoID);
          }
          
          /*if (categoria == 'visited') {
              productFind = pdtosVisited.find(pdto => pdto.id == pdtoID);
          }
  */
          res.render('detail', {
              productFind,
              thousandGenerator: toThousand
          });
      },
  };
  


module.exports = productsController;