import { handleActions, createAction } from "redux-actions"

// 设置数据
const SET_DATA = "@MENU/SET_DATA";

// 设置数据
export const setRouterData = createAction(SET_DATA);

function getInitState() {
  return {
    routerConfigData: [],
    menuData: []
  }
}
//定义初始化状态
let defaultState = getInitState();

export default handleActions({
  [SET_DATA]: (state, data) => {
    return Object.assign({}, state, data.payload);
  }
}, defaultState);
