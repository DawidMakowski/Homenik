import styled from 'styled-components';
import close from '../../icons/close.svg';

const Icon = styled.button`
  width: 2rem;
  height: 2rem;
  background-image: url(${close});
  background-size: cover;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Icon;
