const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const data = await productService.getAll();
  if (!data) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(data);
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const data = await productService.getById(id);
  if (!data) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(data);
};

module.exports = { getAll, getById };