const Joi = require('joi');
const productModel = require('../models/productModel');
const { runSchema } = require('./utils');

const allList = {
  validateBody: runSchema(Joi.object({
    name: Joi.string().required().min(5),
  })),
  
  async getAll() {
    const data = await productModel.getAll();
    return data;
  },

  async getById(id) {
    const data = await productModel.getById(id);
    return data;
  },

  async add(value) {
    const data = await productModel.add(value);
    return data;
  },
};

module.exports = allList;
