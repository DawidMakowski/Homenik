import styled from 'styled-components';

const Button = styled.button`
  width: 250px;
  height: 70px;
  font-weight: bold;
  background: none;
  border: solid 5px ${({ theme }) => theme.black};
  font-size: 2.4rem;
`;

export default Button;
