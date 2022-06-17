import { useState } from 'react';
import NewExpenseBtn from './NewExpenseBtn/Btn';
import NewExpenseInputs from './NewExpenseInput/Input';
import './Form.css';

const NewExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };
    props.saveData(newExpenseData);

    setTitleInput('');
    setDateInput('');
    setAmountInput('');
  };

  const titleChangeHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmountInput(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
  };

  return (
    <form className='expense-container' onSubmit={submitHandler} action='#'>
      <div className='expense-form'>
        <NewExpenseInputs
          titleInput={titleInput}
          titleChangeHandler={titleChangeHandler}
          amountInput={amountInput}
          amountChangeHandler={amountChangeHandler}
          dateInput={dateInput}
          dateChangeHandler={dateChangeHandler}
        />
        <div className='form-actions'>
          <NewExpenseBtn
            onClick={props.toggleHandler}
            contents='Cancel'
            className='cancel'
            type='button'
          />
          <NewExpenseBtn
            onClick={submitHandler}
            contents='Add Expense'
            className='add'
            type='submit'
          />
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
