import React from "react";
import logo from "../../image/logo2.jpeg";
import "./index.less";
import { Layout, Menu, Dropdown,Avatar } from "antd";
import { DownOutlined,UserOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const getMenu = () => {
  return (
    <Menu>
      <Menu.Item key="userInfo">
        <a href="javascript:">个人信息</a>
      </Menu.Item>
      <Menu.Item key="changePassword">
        <a href="javascript:">修改密码</a>
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="logOut">
        <a href="javascript:">退出登录</a>
      </Menu.Item>
    </Menu>
  );
};
const PageHeader = () => {
  return (
    <Header className="header">
      <div className='header-left'>
          <div><img src={logo} style={{width:'100%',height:'100%'}}/></div>
         <div className='menu-info'>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">新闻信息</Menu.Item>
          <Menu.Item key="2">学校概况</Menu.Item>
          <Menu.Item key="4">教学教育</Menu.Item>
          <Menu.Item key="5">科学研究</Menu.Item>
          <Menu.Item key="6">招生就业</Menu.Item>
          <Menu.Item key="7">信息公开</Menu.Item>
          <Menu.Item key="8">校友总会</Menu.Item>
          <Menu.Item key="9">合作交流</Menu.Item>
        </Menu>
      </div>
      </div>
      <div>
        <Dropdown
          overlay={getMenu}
          trigger={["hover"]}
          placement="bottomRight"
        >
          <div className="dropdown-box">
            <Avatar icon={<UserOutlined />} size={30} />
            <span className="user-name"> {"余正琴"} </span>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};
export default PageHeader;
