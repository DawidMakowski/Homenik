import React, { useState } from 'react';
import IncomeCard from '../../components/IncomeCard/IncomeCard';
import OutcomesList from '../../components/OutcomesList/OutcomesList';
import OutcomeCard from '../../components/OutcomeCard/OutcomeCard';
import Add from '../../components/Icon/Add';
import OutcomeCreator from '../../components/OutcomeCreator/OutcomeCreator';
import { StyledHome } from './HomeTemplateStyles';

const HomeTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHome isCreatorOpen={isOpen}>
      {!isOpen ? (
        <>
          <IncomeCard />
          <OutcomeCard />
          <OutcomesList />
        </>
      ) : null}

      <Add onClick={() => setIsOpen(!isOpen)} />
      {isOpen ? <OutcomeCreator /> : null}
    </StyledHome>
  );
};

export default HomeTemplate;
