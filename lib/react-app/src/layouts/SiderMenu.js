import React, { useRef, useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import logo from "../assets/logo.svg"
import style from "./index.module.less"
import { getAuthority } from "@/utils/authority"
import { getFlatMenuKeys, urlToList, getMenuMatchKeys } from "./helper"

const { Sider } = Layout;
const { SubMenu } = Menu;

/**
 * 左侧菜单
 */
const SiderMenu = React.memo((props) => {
  const { collapsed, menuData, location } = props;
  const pathnameRef = useRef(location.pathname);
  useEffect(() => {
    if (pathnameRef.current !== location.pathname) {
      pathnameRef.current = location.pathname;
      setopenKeys(getDefaultCollapsedSubMenus(props));
    }
  }, [location.pathname]);
  // 扁平数据
  const flatMenuKeys = useRef(getFlatMenuKeys(menuData));
  /**
  * 转化菜单选中项
  * /list/search/articles = > ['list','/list/search']
  * @param  props
  */
  const getDefaultCollapsedSubMenus = (props) => {
    const {
      location: { pathname },
    } = props;
    return getMenuMatchKeys(flatMenuKeys.current, urlToList(pathname));
  }
  // 默认打开的菜单
  const [openKeys, setopenKeys] = useState(getDefaultCollapsedSubMenus(props))
  // 无权限菜单过滤
  const checkPermissionItem = (authority, ItemDom, currentUser) => {
    const { Authorized } = props;
    if (Authorized && Authorized.check) {
      const { check } = Authorized;
      return check(authority, currentUser, ItemDom);
    }
    return ItemDom;
  };
  // 菜单项
  function getSubMenuOrItem(menu) {
    if (menu.children && menu.children.length) {
      return (
        <SubMenu key={menu.path} title={menu.name}>
          {getNavMenuItems(menu.children)}
        </SubMenu>
      )
    }
    return <Menu.Item key={menu.path}>{menu.name}</Menu.Item>
  }
  // 递归组装菜单权限验证
  function getNavMenuItems(menuData) {
    const currentUser = getAuthority();
    return menuData.map(item => {
      const itemDom = getSubMenuOrItem(item);
      return checkPermissionItem(item.authority, itemDom, currentUser);
    }).filter(item => item);
  }
  // 选中项
  let selectedKeys = [openKeys[openKeys.length - 1]];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={256}>
      <div className={style.logo} key="logo">
        <img src={logo} alt="logo" />
        <h1>后台管理模板</h1>
      </div>
      <Menu theme="dark" mode="inline" openKeys={openKeys.slice(0, openKeys.length - 1)} selectedKeys={selectedKeys}>
        {
          getNavMenuItems(menuData)
        }
      </Menu>
    </Sider>
  )
})

export default SiderMenu