import { useState } from 'react';
import PropTypes from 'prop-types';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData([...data, json]);
      setLoading(false);
    } catch (err) {
      console.log('err:', err);
    }
  };

  const fetchDataById = async id => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=05fffb3fb46df4247d47709e8708fa8a`
      );
      const json = await res.json();
      setData([...data, json]);
      setLoading(false);
    } catch (err) {
      console.log('err:', err);
    }
  };

  const setNewData = newData => {
    setData(newData);
  };

  return [data, loading, fetchData, fetchDataById, setNewData];
};

useFetch.propTypes = {
  url: PropTypes.string.isRequired
};

export default useFetch;
