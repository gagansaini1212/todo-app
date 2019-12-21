import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: center;
  span {
    margin-top: 5px;
  }
`;

const SidebarMenuList = ({ text, icon }) => (
  <Container className="is-flex">
    <span className="icon">{icon}</span>
    <li>
      <a>{text}</a>
    </li>
  </Container>
);

SidebarMenuList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarMenuList;
