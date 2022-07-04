const db = require('./db');

const allList = {
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
};

module.exports = allList;