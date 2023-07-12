import routes from '@/router'
import { useAppDispatch, useAppSelector } from '@/store'
import { changeMessageAction } from '@/store/modules/counter.tsx'
import { Button } from 'antd'
import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'

const App: React.FC = () => {
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }))

  const dispatch = useAppDispatch()
  const changeMessage = () => {
    dispatch(changeMessageAction('hello world'))
  }

  return (
    <>
      <div>
        测试store
        {count}
        {message}
        <Button type="primary" onClick={changeMessage}>修改值</Button>
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </>
  )
}

export default App
