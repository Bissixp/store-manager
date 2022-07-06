const { Router } = require('express');
const salesController = require('../controllers/salesController');

const productRouter = Router();

productRouter.post('/', salesController.add);
productRouter.get('/', salesController.getAll);
productRouter.get('/:id', salesController.getById);

module.exports = productRouter;
