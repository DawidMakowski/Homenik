import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border: solid 5px ${({ theme }) => theme.colors.black};
  font-weight: 700;
  padding: 0.5em 1em;
  font-size: ${({ theme }) => theme.fs.medium};
  transition: color 0.1s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    cursor: pointer;
  }
`;

export default Button;
