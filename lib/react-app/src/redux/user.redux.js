import { handleActions, createAction } from "redux-actions"
import { queryCurrent, getMenuData } from "@/services/user"
import { setAuthority } from "@/utils/authority"
import { getRouterData } from "../comm/router"
import { setRouterData } from "./menu.redux"

// 从列表点击设置规则对象
const GET_USER_INFO = "@USER/GET_USER_INFO";

// 设置库数据
export const userInfoAction = createAction(GET_USER_INFO);

// 获取用户信息
export function getUser() {
  return dispatch => {
    queryCurrent().then(_d => {
      dispatch(userInfoAction(_d));
      setAuthority(_d.currentAuthority);
      return getMenuData();
    }).then(_d => {
      const data = getRouterData(_d);
      dispatch(setRouterData(data));
    })
  }
}

function getInitState() {
  return {
    userInfo: null
  }
}
//定义初始化状态
let defaultState = getInitState();

export default handleActions({
  [GET_USER_INFO]: (state, data) => {
    return Object.assign({}, state, { userInfo: data.payload });
  }
}, defaultState);
