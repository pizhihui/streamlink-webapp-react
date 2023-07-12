import React, { memo } from 'react'
import type { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const TaskNew: React.FC<IProps> = () => {
  return <div>TaskNew</div>
}

export default memo(TaskNew)
