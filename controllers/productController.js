const productService = require('../services/productService');

const productController = {
  /** @type {import('express').RequestHandler} */
  async getAll(_req, res) {
    const data = await productService.getAll();
    res.status(200).json(data);
  },

  async getById(req, res) {
    try {
      const id = Number(req.params.id);
      const data = await productService.getById(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async add(req, res, next) {
    try {
      const name = await productService.validateBody(req.body);
      const namePostId = await productService.add(name);
      const data = await productService.getById(namePostId);
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  async editProduct(req, res, next) {
    try {
      const id = Number(req.params.id);
      await productService.validateBody(req.body);
      await productService.editProduct(id, req.body);
      const data = await productService.getById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },
  async deleteProduct(req, res, next) {
    try {
      const id = Number(req.params.id);
      await productService.getById(id);
      await productService.deleteProduct(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;