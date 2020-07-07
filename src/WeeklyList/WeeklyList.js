import React, { useContext } from 'react';
import styled from 'styled-components';
import Heading from '../global/Heading';
import { OutcomeContext } from '../global/OutcomeContext';

const StyledWrapper = styled.div`
  border: 2px black solid;
  width: 80vw;
  height: 50vh;
  @media ${({ theme }) => theme.medias.tablet} {
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeeklyList = () => {
  const { outcomes, removeOutcome } = useContext(OutcomeContext);

  return (
    <StyledWrapper>
      <Heading>Siema</Heading>
      <StyledList>
        {outcomes.map((outcome) => (
          <StyledListItem key={outcome.id}>
            <button type="button" onClick={() => removeOutcome(outcome.id)}>
              X
            </button>
            <p>{outcome.title}</p>
            <p>{outcome.value}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default WeeklyList;
