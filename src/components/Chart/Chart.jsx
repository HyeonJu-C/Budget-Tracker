import './Chart.css';
import ChartBar from './ChartBar/Bar';

const Chart = (props) => {
  return (
    <ul className='chart'>
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          label={item.label}
          maxValue={props.maxValue}
        />
      ))}
    </ul>
  );
};

export default Chart;
