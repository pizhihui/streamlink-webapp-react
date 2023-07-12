import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const TaskList: React.FC<IProps> = () => {
  return <div>TaskList</div>
}

export default memo(TaskList)
