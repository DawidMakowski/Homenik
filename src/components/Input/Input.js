import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 70px;
  background: none;
  border: solid 5px #20242d;
  padding-left: 2.4rem;
  font-size: 2.4rem;
  &::placeholder {
    font-weight: thin;
  }
`;

export default Input;
