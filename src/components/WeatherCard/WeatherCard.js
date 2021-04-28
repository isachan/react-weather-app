import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../../styles/WeatherCard.scss';

const WeatherCard = ({ data, isShow }) => {
  const lastData = data[data.length - 1];

  return (
    <div className='weather-card'>
      {isShow &&
        (lastData && lastData.cod !== '404' ? (
          <div className='weather-card__container'>
            <h5 className='weather-card__country'>
              {lastData.name},{lastData.sys.country}
            </h5>
            <h1 className='weather-card__header'>{lastData.weather[0].main}</h1>
            <div className='weather-card__body'>
              <div className='weather-card__body-row'>
                <span>Description: </span> {lastData.weather[0].description}
              </div>
              <div className='weather-card__body-row'>
                <span>Temperature:</span> {lastData.main.temp_min}°C ~{' '}
                {lastData.main.temp_max}°C
              </div>
              <div className='weather-card__body-row'>
                <span>Humidity:</span> {lastData.main.humidity}%
              </div>
              <div className='weather-card__body-row'>
                <span>Time:</span>{' '}
                {moment.unix(lastData.dt).format('YYYY-MM-DD h:mm:ss A')}
              </div>
            </div>
          </div>
        ) : (
          <p className='weather-card__error'>Not Found</p>
        ))}
    </div>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
  isShow: PropTypes.bool.isRequired
};

export default WeatherCard;
