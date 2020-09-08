import React, { useContext } from 'react';
import Heading from '../Heading/Heading';
import Close from '../Icon/Close';
import { OutcomeContext } from '../../context/OutcomeContext';
import Paragraph from '../Paragraph/Paragraph';
import { StyledWrapper, StyledList, StyledListItem, StyledParagraph } from './OutcomesListStyles';
import { useCurrentMonthOutcomes } from '../../hooks/useCurrentMonthOutcomes';

function OutcomesList() {
  const { removeOutcome } = useContext(OutcomeContext);

  const currentMonthOutcomes = useCurrentMonthOutcomes();

  return (
    <StyledWrapper>
      <Heading>Wydatki w tym miesiącu</Heading>
      {currentMonthOutcomes.length === 0 ? (
        <StyledParagraph>Brak wydatków w tym miesiącu</StyledParagraph>
      ) : (
        <StyledList>
          {currentMonthOutcomes.map((outcome) => (
            <StyledListItem key={outcome.id}>
              <Close onClick={() => removeOutcome(outcome.id)} />
              <Paragraph>{outcome.title}</Paragraph>
              <Paragraph>{outcome.cost}</Paragraph>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </StyledWrapper>
  );
}

export default OutcomesList;
