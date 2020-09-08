import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import SideBar from '../components/SideBar/SideBar';

const StyledWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;

  @media (max-width: 1025px) {
    display: flex;
  }
`;

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <StyledWrapper>
      {windowWidth > 1024 ? <SideBar /> : null}
      <HomeTemplate />
    </StyledWrapper>
  );
}

export default Home;
