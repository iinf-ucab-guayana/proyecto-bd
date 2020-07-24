const getConnection = require('../../getConnection');
const promisifyQuery = require('../../promisifyQuery');

const deleteTesistas = async (params, onError = () => {}) => {
  const db = await getConnection();

  const {
    condition,
    value,
  } = params;

  let QUERY = `DELETE FROM tesistas WHERE ${condition}${value}`;

  if (!condition) {
    QUERY = `DELETE FROM tesistas WHERE cedulaT=${value}`;
  }

  console.log(QUERY);

  try {
    const response = await promisifyQuery(db, QUERY);
    return response;
  } catch (error) {
    onError(error.message);
    return null;
  }
};

module.exports = deleteTesistas;
