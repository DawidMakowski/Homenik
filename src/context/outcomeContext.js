import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const OutcomeContext = React.createContext();

const OutcomeProvider = ({ children }) => {
  const [outcomes, setOutcomes] = useState([
    {
      id: 523532,
      title: 'tes',
      value: 325,
    },
  ]);

  const addOutcome = (item) => {
    setOutcomes([...outcomes, item]);
  };

  const removeOutcome = (item) => {
    setOutcomes(outcomes.filter((element) => element !== item));
  };

  const result = {
    outcomes,
    addOutcome,
    removeOutcome,
  };

  return <OutcomeContext.Provider value={result}>{children}</OutcomeContext.Provider>;
};

OutcomeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutcomeProvider;
