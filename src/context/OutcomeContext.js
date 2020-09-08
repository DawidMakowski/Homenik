import React, { useState } from 'react';
import PropTypes from 'prop-types';

const randomDate = new Date(0);

const dummy = [
  {
    title: 'Zakupy',
    cost: 50,
    id: 12343956,
    date: randomDate,
  },
  {
    title: 'Zakupy',
    cost: 50,
    id: 19231456,
    date: randomDate,
  },
  {
    title: 'Zakupy',
    cost: 50,
    id: 12396456,
    date: randomDate,
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
