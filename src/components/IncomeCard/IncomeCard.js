import React, { useContext } from 'react';
import { IncomeContext } from '../../context/IncomeContext';
import Heading from '../Heading/Heading';
import { StyledWrapper, StyledParagraph } from './IncomeCardStyles';

function IncomeCard() {
  const { Income } = useContext(IncomeContext);

  return (
    <StyledWrapper>
      <Heading>Twój miesięczny przychód</Heading>
      <StyledParagraph>{Income}zł</StyledParagraph>
    </StyledWrapper>
  );
}

export default IncomeCard;
