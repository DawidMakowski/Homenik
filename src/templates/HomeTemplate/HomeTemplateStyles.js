import styled, { css } from 'styled-components';
import mobilebackground from '../../images/mobilebackground.svg';

export const StyledHome = styled.div`
  width: 100%;
  padding: 100px 50px;
  display: grid;
  grid-gap: 50px;
  justify-content: center;
  justify-items: center;

  grid-template-areas: ${({ isCreatorOpen }) =>
    isCreatorOpen
      ? `'OutcomeCreator'`
      : `'income outcome list' 'chart1 chart1 list' 'chart1 chart1 list'`};

  @media only screen and (max-width: 1250px) {
    grid-template-areas: ${({ isCreatorOpen }) =>
      isCreatorOpen ? `'OutcomeCreator'` : `'income list' 'outcome list' 'chart1 chart1'`};
    height: auto;
    align-content: center;
  }
  @media only screen and (max-width: 700px) {
    grid-template-areas: ${({ isCreatorOpen }) =>
      isCreatorOpen ? `'OutcomeCreator'` : `'income' 'outcome' 'list' 'list' 'chart1'`};
    height: auto;
  }
`;
