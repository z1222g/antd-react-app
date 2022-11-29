import React,{useState} from 'react'
import { Layout ,Menu,Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './components';
const {  Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const App =()=>{
  const [messageInfo,setMessageInfo]=useState([])
  return(
    <layout>
      <Header/>
    <Layout>
      <Sider width={200} className="site-layout-background" style={{background:'#000'}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, }}
          
        >
          <SubMenu key="sub1" icon={<NotificationOutlined />} title="考试成绩">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="在校经历">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="学生信息">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px',background:'#fff',}}>
      </Layout>
    </Layout>
  </layout>
  )
}
export default App