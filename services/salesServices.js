const Joi = require('joi');
const salesModel = require('../models/salesModel');
const { runSchema } = require('./utils');

const salesService = {
  validateBody: runSchema(Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required().min(1),
  })),

  async getAll() {
    const data = await salesModel.getAll();
    return data;
  },

  async getById(id) {
    const data = await salesModel.getById(id);
    if (data.length === 0 || !data) throw new Error('Sale not found');
    return data;
  },

  async addProduct(value) {
    const id = await salesModel.add();
    await Promise.all(value.map((product) => 
      salesModel.addProduct(id, product)));
    const result = {
      id,
      itemsSold: value,
    };
    return result;
  },
};

module.exports = salesService;
