import React, { useEffect } from 'react'
import { getUserToken } from "@/utils/authority"
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "@/redux/user.redux"
import BasicLayout from "@/layouts/BasicLayout"

/**
 * 主页
 */
const Home = (props) => {
  // 未登录
  if (!getUserToken()) {
    props.history.replace("/login");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  // 用户信息
  const userInfo = useSelector(store => store.user.userInfo);
  const routerConfigData = useSelector(store => store.menu.routerConfigData);
  const menuData = useSelector(store => store.menu.menuData);
  if (userInfo && menuData.length) {
    return <BasicLayout userInfo={userInfo} routerConfigData={routerConfigData} menuData={menuData} />
  } else {
    return null;
  }
}
export default Home;