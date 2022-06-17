import './Filter.css';

const Filter = (props) => {
  const filterChangeHandler = (e) => {
    props.setFilterYear(e.target.value);
  };

  return (
    <section className='filter'>
      <label className='filter-label' htmlFor='year'>
        Filter by year
      </label>
      <select
        className='filter-input'
        name='year'
        id='year'
        onChange={filterChangeHandler}
        value={props.selectedYear}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </section>
  );
};

export default Filter;
