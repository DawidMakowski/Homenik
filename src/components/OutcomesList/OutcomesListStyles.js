import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  width: 300px;
  max-height: 100%;
  grid-area: list;
  padding: 1em;
  border: solid 5px ${({ theme }) => theme.colors.black};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  overflow: scroll;
`;

export const StyledList = styled.ul`
  margin: 2em auto auto 0;
`;
export const StyledListItem = styled.li`
  width: 100%;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
`;
