import { useState } from 'react';
import Chart from '../Chart/Chart';
import Filter from './ExpenseFilter/Filter';
import ExpenseItem from './ExpenseItem/Item';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterd = props.expenses //
    .filter((item) => item.date.getFullYear().toString() === filterYear);

  const dataPoints = [
    { value: 0, label: 1 },
    { value: 0, label: 2 },
    { value: 0, label: 3 },
    { value: 0, label: 4 },
    { value: 0, label: 5 },
    { value: 0, label: 6 },
    { value: 0, label: 7 },
    { value: 0, label: 8 },
    { value: 0, label: 9 },
    { value: 0, label: 10 },
    { value: 0, label: 11 },
    { value: 0, label: 12 },
  ];

  for (const item of filterd) {
    const month = item.date.getMonth(); // Jan => 0
    dataPoints[month].value += item.amount;
  }

  const values = dataPoints.map((item) => item['value']);
  const max = Math.max(...values);

  return (
    <main className='container expenses'>
      <Filter setFilterYear={setFilterYear} selectedYear={filterYear} />
      <Chart dataPoints={dataPoints} maxValue={max} />
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
