const productModel = require('../models/productModel');

const getAll = async () => {
  const data = await productModel.getAll();
  return data;
};

const getById = async (id) => {
  const data = await productModel.getById(id);
  return data;
};

module.exports = { getAll, getById };
