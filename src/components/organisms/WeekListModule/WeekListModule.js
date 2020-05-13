import React from 'react';
import styled from 'styled-components';
import Module from '../../atoms/Module/Module';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const dummyData = [
  {
    title: 'Zakupy',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
  {
    title: 'KArma dla psa',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
  {
    title: 'Zakupyx',
    value: 380,
  },
];

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

const WeekListModule = () => (
  <Module title="Wydatki w tym tygodniu" width="300px" height="900px">
    <StyledContent>
      {dummyData.map((outcome) => (
        <StyledItem>
          <Paragraph>{outcome.title}</Paragraph>
          <Paragraph>{outcome.value}zł</Paragraph>
        </StyledItem>
      ))}
    </StyledContent>
  </Module>
);

export default WeekListModule;
