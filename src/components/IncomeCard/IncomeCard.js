import styled from 'styled-components';
import React, { useContext } from 'react';
import { IncomeContext } from '../../context/IncomeContext';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 1em;
  border: solid 5px ${({ theme }) => theme.colors.black};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fs.xl};
  font-weight: 700;
  margin-top: 2rem;
`;

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
