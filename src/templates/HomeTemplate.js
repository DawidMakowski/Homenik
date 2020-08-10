import styled from 'styled-components';
import React from 'react';
import IncomeCard from '../components/IncomeCard/IncomeCard';
import OutcomesList from '../components/OutcomesList/OutcomesList';
import mobilebackground from '../images/mobilebackground.svg';

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${mobilebackground});
  background-size: 100%;
  background-repeat: no-repeat;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const HomeTemplate = () => (
  <StyledHome>
    <IncomeCard />
    <OutcomesList />
  </StyledHome>
);

export default HomeTemplate;
