const Joi = require('joi');
const salesModel = require('../models/salesModel');
const { runSchema } = require('./utils');

const salesService = {
  validateBody: runSchema(Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required().min(1),
  })),

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
