import { useContext } from 'react';
import { OutcomeContext } from '../context/OutcomeContext';

export const useCurrentMonthOutcomes = () => {
  const { outcomes } = useContext(OutcomeContext);

  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  if (outcomes.length === 0) {
    return;
  }

  const currentYearOutcomes = outcomes.filter(
    (outcome) => outcome.date.getFullYear() === currentYear,
  );

  const currentMonthOutcomes = currentYearOutcomes.filter(
    (outcome) => outcome.date.getMonth() === currentMonth,
  );

  return currentMonthOutcomes;
};
