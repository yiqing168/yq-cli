import React from 'react'
import { Layout, Icon } from 'antd';

const { Header } = Layout;

/**
 * 导航条
 */
const GlobalHeader = React.memo((props) => {
  const { collapsed, toggle } = props;

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </Header>
  )
})

export default GlobalHeader