import React, { useContext } from 'react';
import styled from 'styled-components';
import Module from '../../atoms/Module/Module';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { OutcomeContext } from '../../../context/outcomeContext';
import Button from '../../atoms/Button/Button';

const StyledContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const WeekListModule = () => {
  const { outcomes, addOutcome, removeOutcome } = useContext(OutcomeContext);

  return (
    <Module title="Wydatki w tym tygodniu" width="300px" height="900px">
      <StyledContent>
        {outcomes.map((outcome) => (
          <StyledItem>
            <Paragraph onClick={removeOutcome(outcome.id)}>{outcome.title}</Paragraph>
            <Paragraph>{outcome.value}zł</Paragraph>
          </StyledItem>
        ))}
        {/* <Button
          onClick={addOutcome({
            title: 'jd',
            value: 125,
            id: 1353151,
          })}
        >
          Add outcome
        </Button> */}
      </StyledContent>
    </Module>
  );
};

export default WeekListModule;
