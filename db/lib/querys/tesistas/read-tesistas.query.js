const promisifyQuery = require('../../promisifyQuery');
const getConnection = require('../../getConnection');

const readTesistas = async (onError = () => {}) => {
  const db = await getConnection();
  const QUERY = `SELECT * FROM tesistas`;

  try {
    const response = await promisifyQuery(db, QUERY);
    return response;
  } catch (error) {
    onError(error.message);
    return null;
  }
};

module.exports = readTesistas;
