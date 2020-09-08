import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  width: 300px;
  height: 200px;
  padding: 1em;
  border: solid 5px ${({ theme }) => theme.colors.black};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  grid-area: income;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fs.xl};
  font-weight: 700;
  margin-top: 2rem;
`;
