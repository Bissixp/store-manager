const productModel = require('../models/productModel');

const allList = {
  async getAll() {
    const data = await productModel.getAll();
    return data;
  },

  async getById(id) {
    const data = await productModel.getById(id);
    return data;
  },

  async postName(value) {
    const data = await productModel.postName(value);
    return data;
  },
};

module.exports = allList;
