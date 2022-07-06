const salesService = require('../services/salesServices');
const productService = require('../services/productService');

const salesController = {
  /** @type {import('express').RequestHandler} */

  async getAll(_req, res) {
    const data = await salesService.getAll();
    res.status(200).json(data);
  },

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const data = await salesService.getById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

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