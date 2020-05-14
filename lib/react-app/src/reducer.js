import { combineReducers } from 'redux'

const context = require.context('./redux/', true, /^\.\/.+(redux)\.js$/);
const appkeys = context.keys();
let appPaths = {};
appkeys.forEach((item) => {
  const parts = item.split('/');
  // reducer.js:8 (4) [".", "user", "one", "one.redux.js"]
  /**
   * [".", "user", "one", "one.redux.js"]
   * 遍历路径
   */
  parts.forEach((part, index) => {
    if (part !== '.') {
      // 引用对象 
      let cps = appPaths;
      let cpath = ['.'];
      /**
       * 遍历到实际路径时 根据文件夹名字创建属性
       * 利用对象引用 组装
       */
      if (index === parts.length - 1) {
        for (let i = 1; i < index; i++) {
          // 获取文件夹名称
          const pi = parts[i];
          // 拼装路径
          cpath.push(pi);
          if (!cps[pi]) {
            cps[pi] = {};
          }
          cps = cps[pi];
        }
        let fileName = parts[index].split(".")[0];
        cps[fileName] = context(cpath.join('/') + `/${parts[index]}`, false).default;
      }
    }
  })
});

/**
 * 遍历路径 使用combineReducers 包装
 * @param {*} appPaths 
 */
function clone(appPaths) {
  let target = {};
  for (let i in appPaths) {
    if (typeof appPaths[i] === 'function') {
      target[i] = appPaths[i];
    } else {
      target[i] = combineReducers(clone(appPaths[i]));
    }
  }
  return target;
}

const travelTree = clone(appPaths);
const app = combineReducers({
  ...travelTree
})

export default app;