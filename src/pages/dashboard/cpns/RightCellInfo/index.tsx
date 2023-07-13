import { RightWrapper } from '@/pages/dashboard/cpns/RightCellInfo/style.ts'
import { Graph } from '@antv/x6'
import { Cell } from '@antv/x6/lib/model/cell'
import { CellView } from '@antv/x6/lib/view'
import { Button } from 'antd'
import React, { memo, useEffect, useState } from 'react'

interface IProps {
  children?: React.ReactNode
  graph: React.MutableRefObject<Graph | null>
  curCell: CellView<Cell<Cell.Properties>, CellView.Options> | null
}

const RightCellInfo: React.FC<IProps> = ({ graph, curCell }) => {
  console.log('right.cell.info....', graph.current)
  const [curMsg, setCurMsg] = useState<string>('')
  // graph.current?.on('node:selected', ({ cell }: { cell: Cell }) => {
  //   console.log('selected....', cell)
  //   //setSelectedNode(cell?.getData?.())
  // })

  // const preCurCell = useRef(curCell)
  useEffect(() => {
    // preCurCell.current = curCell
    console.log('cell.info.当前组件发生变化', curCell)
    if (!curCell) {
      setCurMsg('')
      return
    }
    console.log('cell.info.当前组件发生变化', curCell.cell.attrs)
    if (curCell.cell.attrs) {
      setCurMsg(curCell.cell.attrs.label.text as string)
    }
  }, [curCell])

  const handleClick = () => {
    console.log('curcell', curCell)
    if (!curCell) {
      return
    }
    const curNode = curCell.cell
    console.log('获取当强cell的信息.....', curNode)
    // console.log('获取当强cell的信息.....', curNode?.prop())
    // curNode?.attr('label/text', 'kafka-topic-01-....')
  }
  return (
    <RightWrapper>
      <Button type="primary" onClick={handleClick}>
        点击我
      </Button>
      <p>{curMsg}</p>
    </RightWrapper>
  )
}

export default memo(RightCellInfo)
