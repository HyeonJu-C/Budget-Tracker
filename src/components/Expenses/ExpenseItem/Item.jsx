import './Item.css';
import Calendar from './Calendar/Calendar';

const ExpenseItem = (props) => {
  return (
    <article className='item-container'>
      <Calendar date={props.date} />
      <section className='item-description'>
        <h1 className='description-title'>{props.title}</h1>
        <p className='description-price'>${props.amount}</p>
      </section>
    </article>
  );
};

export default ExpenseItem;
