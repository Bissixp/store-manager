const salesService = require('../services/salesServices');
const productService = require('../services/productService');

const salesController = {
  /** @type {import('express').RequestHandler} */
  async add(req, res, next) {
    try {
      const value = req.body;
      await Promise.all(
        value.map((item) => salesService.validateBody(item)),
      );
      await Promise.all(
        value.map((item) => productService.getById(item.productId)),
      );
      const result = await salesService.addProduct(value);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = salesController;