import React, { memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Home: React.FC<IProps> = () => {
  return (
    <>
      <div>
        <Link to="/home/task_list">task_list</Link>
        <Link to="/home/task_new">task_new</Link>
      </div>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(Home)
