import React, { useContext } from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import Paragraph from '../Paragraph/Paragraph';
import { OutcomeContext } from '../../context/OutcomeContext';

const StyledWrapper = styled.div`
  width: 300px;
  padding: 1em;
  border: solid 5px ${({ theme }) => theme.colors.black};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledList = styled.ul`
  margin: 2em auto auto 0;
`;
const StyledListItem = styled.li`
  width: 100%;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function OutcomesList() {
  const { outcomes, removeOutcome } = useContext(OutcomeContext);

  return (
    <StyledWrapper>
      <Heading>Wydatki w tym miesiącu</Heading>
      <StyledList>
        {outcomes.map((outcome) => (
          <StyledListItem>
            <Icon onClick={() => removeOutcome(outcome.id)} />
            <Paragraph>{outcome.title}</Paragraph>
            <Paragraph>{outcome.value}</Paragraph>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
}

export default OutcomesList;
