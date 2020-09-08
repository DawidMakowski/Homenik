import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
`;

const SideBar = () => {
  return <StyledSideBar>XD</StyledSideBar>;
};

export default SideBar;
