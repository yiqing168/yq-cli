import React, { useMemo } from 'react'
import { Layout } from 'antd'
import { Switch, Redirect, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import Authorized from '@/components/Authorized';
import { getAuthority } from "@/utils/authority"
import NotFound from '../pages/Exception/404';

const { Content } = Layout;
const { AuthorizedRoute, check } = Authorized;

/**
 * 内容组件
 * @param {*} props
 */
const ContentLayout = (props) => {
  const routerConfigData = useSelector(state => state.menu.routerConfigData);
  const menuData = useSelector(state => state.menu.menuData);
  const currentUser = getAuthority();
  const redirectData = useMemo(() => {
    const redirectData = [];
    const getRedirect = item => {
      if (item && item.children) {
        if (item.children[0] && item.children[0].path) {
          redirectData.push({
            from: `${item.path}`,
            to: `${item.children[0].path}`,
          });
          item.children.forEach(children => {
            getRedirect(children);
          });
        }
      }
    };
    menuData.forEach(getRedirect);
    return redirectData;
  }, [menuData]);
  const getBaseRedirect = () => {
    // According to the url parameter to redirect
    // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
    const urlParams = new URL(window.location.href);
    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      const authorizedPath = Object.keys(routerConfigData).find(
        item => check(routerConfigData[item].authority, currentUser, item) && item !== '/'
      );
      return authorizedPath;
    }
    return redirect;
  };
  const baseRedirect = getBaseRedirect();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 280,
      }}
    >
      <Switch>
        {redirectData.map(item => (
          <Redirect key={item.from} exact from={item.from} to={item.to} />
        ))}
        {
          Object.keys(routerConfigData).map(path => {
            const item = routerConfigData[path];
            return (
              <AuthorizedRoute
                key={item.path}
                path={item.path}
                component={item.component}
                exact={item.exact === undefined ? true : item.exact}
                authority={item.authority}
                currentUser={currentUser}
                redirectPath="/exception/403"
              />
            )
          })
        }
        <Redirect exact from="/" to={baseRedirect} />
        <Route render={NotFound} />
      </Switch>
    </Content>
  )
}

export default ContentLayout;
