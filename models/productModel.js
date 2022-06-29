const db = require('./db');

const getAll = async () => {
  const [data] = await db.execute(
    'SELECT * FROM products',
);
  return data;
};
const getById = async (id) => {
  const [[data]] = await db.execute(
    'SELECT * FROM products WHERE id = ?', [id],
);
  return data;
};

module.exports = { getAll, getById };