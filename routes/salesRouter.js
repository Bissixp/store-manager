const { Router } = require('express');
const salesController = require('../controllers/salesController');

const productRouter = Router();

productRouter.post('/', salesController.add);

module.exports = productRouter;
