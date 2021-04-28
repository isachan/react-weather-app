import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useInput = ({ type }) => {
  const [value, setValue] = useState('');

  const input = (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      type={type}
      placeholder={`Enter ${type}`}
    />
  );
  return [value, input, setValue];
};

useInput.propTypes = {
  type: PropTypes.string.isRequired
};

export default useInput;
