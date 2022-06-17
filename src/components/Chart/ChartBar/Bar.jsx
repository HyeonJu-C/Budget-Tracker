import './Bar.css';

const ChartBar = (props) => {
  const fillHeight =
    props.maxValue > 0
      ? Math.round((props.value / props.maxValue) * 100) + '%'
      : '0%';

  return (
    <li className='bar'>
      <div className='bar-outter'>
        <div className='bar-fill' style={{ height: fillHeight }}></div>
      </div>
      <h2 className='bar-label'>{props.label}</h2>
    </li>
  );
};

export default ChartBar;
