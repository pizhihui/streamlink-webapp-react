import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/home/index.tsx'))
const Dashboard = React.lazy(() => import('@/pages/dashboard/index.tsx'))
const About = React.lazy(() => import('@/pages/about/index.tsx'))

const TaskNew = React.lazy(() => import('@/pages/home/cpns/TaskNew/index.tsx'))
const TaskList = React.lazy(() => import('@/pages/home/cpns/TaskList/index.tsx'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/task_list',
        element: <TaskList />
      },
      {
        path: '/home/task_new',
        element: <TaskNew />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/about',
    element: <About />
  }
]

export default routes
