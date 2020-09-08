import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const ErrorMessage = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.warn};
  font-size: ${({ theme }) => theme.fs.normal};
`;
export const StyledForm = styled.form`
  width: 300px;
  height: 500px;
  border: solid 5px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: OutcomeCreator;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
