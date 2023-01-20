import React, {useContext} from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from "antd";
import { PrivateLayoutContext } from 'context/private-layout-context'
const { Header } = Layout;

function TopBar() {
  const { leftSideBarCollapsed, setLeftSideBarCollapsed } = useContext(PrivateLayoutContext);

  return (
    <Header>
          {React.createElement(leftSideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setLeftSideBarCollapsed(!leftSideBarCollapsed),
          })}
    </Header>
  )
}

export default TopBar