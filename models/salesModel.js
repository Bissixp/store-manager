const db = require('./db');

const salesModel = {

  async getAll() {
    const [data] = await db.execute(
      `SELECT
        sale_id AS saleId, date, 
        product_id AS productId, quantity
        FROM sales_products
        INNER JOIN sales
        ON id = sale_id`,
    );
    return data;
  },
  
  async getById(id) {
    const [data] = await db.execute(
      `SELECT
        date, 
        product_id as productId, quantity
        FROM sales_products
        INNER JOIN sales
        ON id = sale_id
        WHERE id = ? `, [id],
    );
    return data;
  },

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