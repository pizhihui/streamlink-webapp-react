import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const Dashboard: React.FC<IProps> = () => {
  return <div>Dashboard</div>
}

export default memo(Dashboard)
