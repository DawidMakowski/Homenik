import React, { useState } from 'react';
import PropTypes from 'prop-types';

const dummy = [
  {
    title: 'Zakupy',
    value: '50zł',
    id: 1234956,
  },
  {
    title: 'Zakupy',
    value: '50zł',
    id: 1923456,
  },
  {
    title: 'Zakupy',
    value: '50zł',
    id: 1239456,
  },
];

export const OutcomeContext = React.createContext();

const OutcomeContextProvider = ({ children }) => {
  const [outcomes, setOutcomes] = useState([...dummy]);

  const addOutcome = (outcome) => {
    setOutcomes([...outcomes, outcome]);
  };

  const removeOutcome = (id) => {
    setOutcomes(outcomes.filter((outcome) => outcome.id !== id));
  };

  return (
    <OutcomeContext.Provider value={{ outcomes, addOutcome, removeOutcome }}>
      {children}
    </OutcomeContext.Provider>
  );
};

OutcomeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutcomeContextProvider;
