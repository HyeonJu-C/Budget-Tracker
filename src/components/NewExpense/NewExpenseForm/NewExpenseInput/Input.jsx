import React from 'react';
import './Input.css';

const NewExpenseInputs = (props) => {
  return (
    <div className='expense-controls'>
      <div className='form-control'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input
          type='text'
          className='form-title form-input'
          name='title'
          id='title'
          value={props.titleInput}
          onChange={props.titleChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          type='number'
          className='form-amount form-input'
          name='amount'
          id='amount'
          min='0.01'
          step={0.01}
          value={props.amountInput}
          onChange={props.amountChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='date' className='form-label'>
          Date
        </label>
        <input
          min='2019-01-01'
          max='2022-12-31'
          type='date'
          className='form-date form-input'
          name='date'
          id='date'
          value={props.dateInput}
          onChange={props.dateChangeHandler}
        />
      </div>
    </div>
  );
};

export default NewExpenseInputs;
