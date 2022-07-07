const { Router } = require('express');
const productController = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/:id', productController.getById);
productRouter.put('/:id', productController.editProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.get('/', productController.getAll);
productRouter.post('/', productController.add);

module.exports = productRouter;
