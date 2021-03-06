const getConnection = require('../../getConnection');
const promisifyQuery = require('../../promisifyQuery');
const {
  spreadObj,
  validateInput,
 } = require('../../../utils');


const attributes = [
  'nombreT',
  'correoT',
  'correopT',
  'direccionT',
];

const updateTesistas = async (params, onError = () => {}) => {
  const db = await getConnection();

  const {
    condition,
    value,
    data,
  } = params;

  if (!validateInput(data, attributes, onError)) {
    return null;
  }

  const values = spreadObj(data, attributes);

  let QUERY = `UPDATE tesistas SET ${values} WHERE ${condition}${value}`;

  if (!condition) {
    QUERY = `UPDATE tesistas SET ${values} WHERE cedulaT=${value}`;
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

module.exports = updateTesistas;
