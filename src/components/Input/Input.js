import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  height: 50px;
  background-color: transparent;
  border: solid 5px ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fs.medium};

  &::placeholder {
    font-size: ${({ theme }) => theme.fs.normal};
  }
`;

export default Input;
