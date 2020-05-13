import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';

const ModuleWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: solid 5px #20242d;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Module = ({ width, height, title, children }) => (
  <ModuleWrapper width={width} height={height}>
    <Heading secondary>{title}</Heading>
    {children}
  </ModuleWrapper>
);

export default Module;

Module.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
