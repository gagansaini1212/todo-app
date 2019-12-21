import React from 'react';
import styled from 'styled-components';

import SidebarHeader from './SidebarHeader';
import SidebarMenuList from './SidebarMenuList';

const Container = styled.div`
  background: #cbccc2;
  height: 100vh;
`;

const homeIcon = <i className="fas fa-info-circle"></i>;

const Sidebar = () => (
  <div className="columns">
    <Container className="column is-3">
      <aside className="menu">
        <ul className="menu-list">
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
        </ul>
        <SidebarHeader heading="Projects" />
        <ul className="menu-list">
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
        </ul>
        <SidebarHeader heading="Projects" />
        <ul className="menu-list">
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
        </ul>
        <SidebarHeader heading="Projects" />
        <ul className="menu-list">
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
          <SidebarMenuList text="Dashboard" icon={homeIcon} />
        </ul>
      </aside>
    </Container>
  </div>
);

export default Sidebar;
