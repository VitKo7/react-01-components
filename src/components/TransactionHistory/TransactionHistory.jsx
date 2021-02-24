import React from 'react';
import TransactionItem from './TransactionItem/TransactionItem';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>{'Type'.toUpperCase()}</th>
        <th>{'Amount'.toUpperCase()}</th>
        <th>{'Currency'.toUpperCase()}</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  </table>
);

export default TransactionHistory;
