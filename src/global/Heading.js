import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fs.big};
  color: ${({ theme }) => theme.colors.black};
`;

export default Heading;
