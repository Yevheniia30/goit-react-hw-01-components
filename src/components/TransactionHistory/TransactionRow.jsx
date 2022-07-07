import React from 'react';
import PropTypes from 'prop-types';
// import s from './TransactionHistory.module.css';

const TransactionRow = ({ item }) => {
  return (
    <tr >
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TransactionRow;
