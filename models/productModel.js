const db = require('./db');

const productModel = {
  async getAll() {
    const [data] = await db.execute(
      'SELECT * FROM products',
    );
    return data;
  },
  async getById(id) {
    const [[data]] = await db.execute(
      'SELECT * FROM products WHERE id = ?', [id],
    );
    return data;
  },

  async add(value) {
    const [{ insertId }] = await db.execute(
      'INSERT INTO products (name) VALUES (?)', [value.name],
    );
    return insertId;
  },
  
  async editProduct(id, value) {
      await db.execute(
      'UPDATE products SET name = ? WHERE id = ?', [value.name, id],
    );
  },
  async deleteProduct(id) {
    await db.execute(
      'DELETE FROM products WHERE id = ?', [id],
    );
  },
};

module.exports = productModel;