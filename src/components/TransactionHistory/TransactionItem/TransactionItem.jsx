import React from 'react';
import PropTypes from 'prop-types';
import ucFirst from '../../../lib/ucFirst.js';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{ucFirst(type)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
