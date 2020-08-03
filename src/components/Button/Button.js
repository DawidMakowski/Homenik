import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.7rem;
  border: none;
  padding: 0.5em 1em;
  font-size: ${({ theme }) => theme.fs.normal};
`;

export default Button;
