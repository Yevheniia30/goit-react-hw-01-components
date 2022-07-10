// import PropTypes from 'prop-types';
// import s from './TransactionHistory.module.css';

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

// TransactionRow.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default TransactionRow;
