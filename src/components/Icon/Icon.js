import styled from 'styled-components';
import close from '../../icons/close.svg';

const Icon = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${close});
  background-size: cover;
  background-color: transparent;
  border: none;
  transition: transform 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Icon;
