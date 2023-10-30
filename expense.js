import React from 'react';

const Expense = ({ expense }) => {
  return (
    <div className="expense">
      <p>{expense.description}</p>
      <p>{expense.amount} PLN</p>
    </div>
  );
};

export default Expense;