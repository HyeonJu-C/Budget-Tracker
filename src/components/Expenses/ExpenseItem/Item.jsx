import './Item.css';
import Calendar from '../ExpenseCalendar/Calendar';

const ExpenseItem = (props) => {
  return (
    <li className='card expense-item'>
      <Calendar date={props.date} />
      <section className='item-description'>
        <h3 className='description-title'>{props.title}</h3>
        <p className='description-price'>${props.amount}</p>
      </section>
    </li>
  );
};

export default ExpenseItem;
