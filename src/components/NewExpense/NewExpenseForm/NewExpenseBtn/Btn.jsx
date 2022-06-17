import './Btn.css';

const NewExpenseBtn = (props) => {
  const classes = 'form-action ' + props.className;
  const clickHandler = props.onClick;
  return (
    <button className={classes} type='submit' onClick={clickHandler}>
      {props.contents}
    </button>
  );
};

export default NewExpenseBtn;
