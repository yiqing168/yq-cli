import loadable from "../utils/loadable"
import { pathToRegexp } from "path-to-regexp";
import { formatter } from "./menu"

// 路由配置
const routerConfig = [
  {
    path: "/dashboard/analysis",
    component: loadable(() => import('../pages/Dashboard/Analysis/'))
  }
];
// 查找菜单key
function findMenuKey(menuData, path) {
  const menuKey = Object.keys(menuData).find(key => pathToRegexp(path).test(key));
  if (menuKey == null) {
    if (path === '/') {
      return null;
    }
    const lastIdx = path.lastIndexOf('/');
    if (lastIdx < 0) {
      return null;
    }
    if (lastIdx === 0) {
      return findMenuKey(menuData, '/');
    }
    // 如果没有，使用上一层的配置
    return findMenuKey(menuData, path.substr(0, lastIdx));
  }
  return menuKey;
}
// 扁平数据
function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach(item => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}
export function getRouterData(menuData) {
  const menuDataOut = formatter(menuData);
  // 扁平数据
  const menuDataMap = getFlatMenuData(menuDataOut);
  const routerConfigData = {};
  routerConfig.forEach(router => {
    // 菜单key
    let menuKey = Object.keys(menuDataMap).find(key => {
      return pathToRegexp(router.path).test(key);
    })
    const inherited = menuKey === null;
    if (menuKey === null) {
      // 往上级找
      menuKey = findMenuKey(menuDataMap, router.path);
    }
    let menuItem = {};
    if (menuKey) {
      menuItem = menuDataMap[menuKey];
    }
    routerConfigData[router.path] = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
      inherited,
    }
  })
  return {
    routerConfigData,
    menuData: menuDataOut
  }
}