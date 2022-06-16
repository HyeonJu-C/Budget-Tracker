import './Calendar.css';

const Calendar = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });
  const year = props.date.getFullYear();

  return (
    <section className='card date'>
      <h2 className='sr-only'>expense date</h2>
      <p className='date-detail'>
        <span className='month'>{month}</span>
        <span className='year'>{year}</span>
        <span className='day'>{day}</span>
      </p>
    </section>
  );
};

export default Calendar;
