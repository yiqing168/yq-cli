// 查询用户角色信息
export async function queryCurrent() {
  return {
    "name": "Serati Ma",
    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    "userid": "00000001",
    "notifyCount": 12,
    "currentAuthority": "user"
  };
}
// 获取菜单
export async function getMenuData() {
  return [
    {
      name: 'dashboard',
      icon: 'dashboard',
      path: 'dashboard',
      children: [
        {
          name: '分析页',
          path: 'analysis',
        }
      ]
    }
  ];
}