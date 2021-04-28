import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './SearchHistory.scss';

const SearchHistory = ({ data, fetchDataById, setNewData, setIsShow }) => {
  //assumption: clearing of duplicate entries
  const handleDeleteById = id => {
    const newList = data.filter(item => item.id !== id);
    setNewData(newList);
    setIsShow(false);
  };

  return (
    <div className='search-history'>
      <h1 className='react-weather-app__header'>Search History</h1>
      <ol className='search-history__items'>
        {data &&
          data.map(
            (item, key) =>
              item &&
              item.cod !== '404' && (
                <li className='search-history__item' key={key}>
                  <span className='search-history__item-name'>
                    {item.name},{item.sys.country}
                  </span>
                  <span className='search-history__item-date-cta'>
                    <span>{moment.unix(item.dt).format('h:mm:ss A')}</span>
                    <div className='search-history__item-buttons'>
                      <button onClick={() => fetchDataById(item.id)}>
                        <i class='fas fa-search'></i>
                      </button>
                      <button onClick={() => handleDeleteById(item.id)}>
                        <i class='fas fa-trash-alt'></i>
                      </button>
                    </div>
                  </span>
                </li>
              )
          )}
      </ol>
    </div>
  );
};

SearchHistory.propTypes = {
  data: PropTypes.array.isRequired,
  fetchDataById: PropTypes.func.isRequired,
  setNewData: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired
};

export default SearchHistory;
