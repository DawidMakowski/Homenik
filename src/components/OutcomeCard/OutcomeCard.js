import React, { useState, useEffect } from 'react';
import Heading from '../Heading/Heading';
import { StyledWrapper, StyledParagraph } from './OutcomeCardStyles';
import { useCurrentMonthOutcomes } from '../../hooks/useCurrentMonthOutcomes';

const OutcomeCard = () => {
  const [currentOutcomes, setCurrentOutcomes] = useState(0);

  const currentMonthOutcomes = useCurrentMonthOutcomes();

  const currentOutcomesCounter = () => {
    const currentOutcomesAmmount = currentMonthOutcomes
      .map((item) => parseInt(item.cost, 10))
      .reduce((prev, acc) => {
        return acc + prev;
      }, 0);

    setCurrentOutcomes(currentOutcomesAmmount);
  };

  useEffect(currentOutcomesCounter);

  return (
    <StyledWrapper>
      <Heading>Twoje miesięczne wydatki</Heading>
      <StyledParagraph>{currentOutcomes}zł</StyledParagraph>
    </StyledWrapper>
  );
};

export default OutcomeCard;
