import routes from '@/router'
import { useAppDispatch, useAppSelector } from '@/store'
import { changeMessageAction } from '@/store/modules/counter.tsx'
import { Button, Layout, Menu } from 'antd'
import React, { Suspense } from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'
import logo from '@/assets/logo.svg'

const { Header, Content } = Layout

const App: React.FC = () => {
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }))

  const dispatch = useAppDispatch()
  const changeMessage = () => {
    dispatch(changeMessageAction('hello world'))
  }

  const location = useLocation()
  const selectedKey = location.pathname.startsWith('/home')
    ? '/home'
    : location.pathname

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key="/home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <div>
          测试store
          {count}
          {message}
          <Button type="primary" onClick={changeMessage}>
            修改值
          </Button>
        </div>
        <Suspense fallback="loading...">
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      </Content>
    </Layout>
  )
}

export default App
