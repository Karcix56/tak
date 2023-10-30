const [newExpense, setNewExpense] = useState({ description: '', amount: 0 });

const addExpense = () => {
  setExpenses([...expenses, newExpense]);
  setNewExpense({ description: '', amount: 0 });
};

return (
  <div className="expense-planner">
    <h1>Planer Wydatków</h1>
    <div className="expense-form">
      <input
        type="text"
        placeholder="Opis wydatku"
        value={newExpense.description}
        onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Kwota (PLN)"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
      />
      <button onClick={addExpense}>Dodaj wydatek</button>
    </div>
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <Expense key={index} expense={expense} />
      ))}
    </div>
  </div>
);
};

export default ExpensePlanner;