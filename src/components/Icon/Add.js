import styled from 'styled-components';
import add from '../../icons/add.svg';

const Add = styled.button`
  width: 3rem;
  height: 3rem;
  background-image: url(${add});
  background-size: cover;
  background-color: transparent;
  border: none;
  transition: transform 0.2s ease-out;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;

  @media only screen and (max-width: 450px) {
    top: 1rem;
    right: 1rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default Add;
