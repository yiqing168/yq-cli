import React, { useState } from 'react'
import { Layout } from 'antd';
import { withRouter } from "react-router-dom"
import SiderMenu from "./SiderMenu"
import GlobalHeader from "./GlobalHeader"
import style from "./index.module.less"
import Authorized from "@/components/Authorized/"
import ContentLayout from "./ContentLayout"

/**
 * 主布局
 */
const BasicLayout = (props) => {
  const { menuData, location } = props;
  // 左侧展开
  const [collapsed, setcollapsed] = useState(false);

  return (
    <Layout className={style["layout"]}>
      <SiderMenu menuData={menuData} toggle={setcollapsed} Authorized={Authorized} location={location} />
      <Layout>
        <GlobalHeader collapsed={collapsed} />
        <ContentLayout />
      </Layout>
    </Layout>
  )
}

export default withRouter(BasicLayout);