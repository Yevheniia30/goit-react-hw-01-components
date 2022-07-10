import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionRow from './TransactionRow';

export const TransactionHistory = ({ data }) => {
  // console.log('data', data);
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <TransactionRow
            amount={item.amount}
            currency={item.currency}
            type={item.type}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
