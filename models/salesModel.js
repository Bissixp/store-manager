const db = require('./db');

const salesModel = {
  async add() {
    const [{ insertId }] = await db.execute(
      'INSERT INTO sales (date) VALUES (NOW())',
);
    return insertId;
  },

  async addProduct(id, { productId, quantity }) {
    const [{ insertId }] = await db.execute(
      `INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?,?,?)`, [id, productId, quantity],
    );
    return insertId;
  },
};

module.exports = salesModel;