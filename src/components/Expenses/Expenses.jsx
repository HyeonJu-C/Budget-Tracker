import { useState } from 'react';
import Filter from './ExpenseFilter/Filter';
import ExpenseItem from './ExpenseItem/Item';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterd = props.expenses //
    .filter((item) => item.date.getFullYear().toString() === filterYear);

  return (
    <main className='container expenses'>
      <Filter setFilterYear={setFilterYear} selectedYear={filterYear} />
      {filterd.length === 0 && <p className='expenses-no'>No item</p>}
      <ul>
        {filterd.length !== 0 &&
          filterd.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </ul>
    </main>
  );
};

export default Expenses;
