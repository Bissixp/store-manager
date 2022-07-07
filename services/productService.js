const Joi = require('joi');
const productModel = require('../models/productModel');
const { runSchema } = require('./utils');

const productService = {
  validateBody: runSchema(Joi.object({
    name: Joi.string().required().min(5),
  })),
  
  async getAll() {
    const data = await productModel.getAll();
    return data;
  },

  async getById(id) {
    const data = await productModel.getById(id);
    if (!data) throw new Error('Product not found');
      return data;
  },

  async add(value) {
    const data = await productModel.add(value);
    return data;
  },

  async editProduct(id, value) {
    await productModel.editProduct(id, value);
  },
};

module.exports = productService;
