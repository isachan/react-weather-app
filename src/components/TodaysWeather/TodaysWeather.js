import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/TodaysWeather.scss';

const TodaysWeather = ({
  cityInput,
  countryInput,
  handleSearch,
  handleClear
}) => {
  return (
    <div className='todays-weather'>
      <h1 className='react-weather-app__header'>Today's Weather</h1>
      <div className='todays-weather__body'>
        <div className='todays-weather__inputs'>
          <div className='todays-weather__input'>
            <label>City:</label>
            {cityInput}
          </div>
          <div className='todays-weather__input'>
            <label>Country:</label>
            {countryInput}
          </div>
        </div>
        <div className='todays-weather__buttons'>
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

TodaysWeather.propTypes = {
  cityInput: PropTypes.element.isRequired,
  countryInput: PropTypes.element.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired
};

export default TodaysWeather;
