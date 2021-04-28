import React, { useState } from 'react';

import useInput from '../utils/hooks/useInput';
import useFetch from '../utils/hooks/useFetch';

import WeatherCard from './WeatherCard/WeatherCard';
import SearchHistory from './SearchHistory/SearchHistory';
import TodaysWeather from './TodaysWeather/TodaysWeather';
import '../styles/WeatherApp.scss';

const WeatherApp = () => {
  const [cityValue, cityInput, setCityValue] = useInput({
    type: 'city'
  });
  const [countryValue, countryInput, setCountryValue] = useInput({
    type: 'country'
  });

  const [
    fetchedData,
    isLoading,
    refetchData,
    fetchDataById,
    setNewData
  ] = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=05fffb3fb46df4247d47709e8708fa8a`
  );

  const [isShow, setIsShow] = useState(true);

  const handleSearch = async () => {
    refetchData();
    setCityValue('');
    setCountryValue('');
    setIsShow(true);
  };
  const handleClear = () => {
    setCityValue('');
    setCountryValue('');
    setIsShow(false);
  };

  return (
    <div className='weather-app'>
      <TodaysWeather
        cityInput={cityInput}
        countryInput={countryInput}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      {!isLoading && <WeatherCard data={fetchedData} isShow={isShow} />}
      <SearchHistory
        data={fetchedData}
        fetchDataById={fetchDataById}
        setNewData={setNewData}
        setIsShow={setIsShow}
      />
    </div>
  );
};

export default WeatherApp;
