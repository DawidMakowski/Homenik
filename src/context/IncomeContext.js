import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const IncomeContext = React.createContext();

const IncomeContextProvider = ({ children }) => {
  const [Income, setIncome] = useState(2700);

  return <IncomeContext.Provider value={{ Income, setIncome }}>{children}</IncomeContext.Provider>;
};

IncomeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IncomeContextProvider;
