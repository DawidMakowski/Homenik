import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: bold;
  font-size: ${({ secondary }) => (secondary ? '2.4rem' : '6.4rem')};
`;

export default Heading;
