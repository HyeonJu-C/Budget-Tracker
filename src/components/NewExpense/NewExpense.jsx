import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm/Form';
import NewExpenseBtn from './NewExpenseForm/NewExpenseBtn/Btn';

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const saveDataHandler = (data) => {
    const newData = {
      id: Math.random().toString(),
      ...data,
    };
    props.addData(newData);
  };

  return (
    <section className='container new-expense'>
      <h1 className='sr-only'>make new expense log</h1>
      {!toggle && (
        <NewExpenseBtn
          type='button'
          onClick={toggleHandler}
          contents='Add New Expense'
        />
      )}
      {toggle && (
        <NewExpenseForm
          saveData={saveDataHandler}
          toggle={toggle}
          toggleHandler={toggleHandler}
        />
      )}
    </section>
  );
};

export default NewExpense;
