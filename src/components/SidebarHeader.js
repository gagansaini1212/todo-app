import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.p`
  justify-content: center;
`;

const SidebarHeader = ({ heading }) => (
  <Wrapper className="menu-label is-flex">{heading}</Wrapper>
);

SidebarHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default SidebarHeader;
