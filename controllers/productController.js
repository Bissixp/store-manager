const productService = require('../services/productService');

const allList = {
  async getAll(_req, res) {
    const data = await productService.getAll();
    if (!data) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(data);
  },

  async getById(req, res) {
    const id = Number(req.params.id);
    const data = await productService.getById(id);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(data);
  },

  async postName(req, res) {
    const name = req.body;
    const namePostId = await productService.postName(name);
    const data = await productService.getById(namePostId);
    res.status(201).json(data);
  },
};

module.exports = allList;