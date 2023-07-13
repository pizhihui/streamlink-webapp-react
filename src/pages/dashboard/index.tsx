import LeftSideBar from '@/pages/dashboard/cpns/LeftSideBar'
import RightCellInfo from '@/pages/dashboard/cpns/RightCellInfo'
import { CenterWrapper, TaskWrapper } from '@/pages/dashboard/style.ts'
import ClickHouseNode from '@/pages/dashboard/x6lib/ClickHouseNode.ts'
import HbaseNode from '@/pages/dashboard/x6lib/HbaseNode.ts'
import KafkaNode from '@/pages/dashboard/x6lib/KafkaNode.ts'
import x6Init from '@/pages/dashboard/x6lib/x6Init.ts'
import { Graph } from '@antv/x6'
import { Cell } from '@antv/x6/lib/model/cell'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Selection } from '@antv/x6-plugin-selection'
import { CellView } from '@antv/x6/lib/view'
// import { Dropdown } from 'antd'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
// import { register } from '@antv/x6-react-shape'
// import { Snapline } from '@antv/x6-plugin-snapline'
interface IProps {
  children?: ReactNode
}

const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'custom-react-node',
      x: 40,
      y: 40,
      label: 'hello'
    },
    {
      id: 'node2',
      shape: 'custom-react-node',
      x: 160,
      y: 180,
      label: 'world'
    }
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      // label: 'x6',
      attrs: {
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1
        }
      }
    }
  ]
}

// const CustomComponent = ({ node }: { node: Node }) => {
//   const label = node.prop('label')
//   return (
//     <Dropdown
//       menu={{
//         items: [
//           {
//             key: 'copy',
//             label: '复制'
//           },
//           {
//             key: 'paste',
//             label: '粘贴'
//           },
//           {
//             key: 'delete',
//             label: '删除'
//           }
//         ]
//       }}
//       trigger={['contextMenu']}
//     >
//       <div className="custom-react-node">{label}</div>
//     </Dropdown>
//   )
// }

// register({
//   shape: 'custom-react-node',
//   width: 100,
//   height: 40,
//   component: CustomComponent
// })

Graph.registerNode('custom-react-node', ClickHouseNode, true)
Graph.registerNode('clickhouse-node', ClickHouseNode, true)
Graph.registerNode('kafka-node', KafkaNode, true)
Graph.registerNode('hbase-node', HbaseNode, true)

const Dashboard: React.FC<IProps> = () => {
  // const containerRef = useRef<HTMLDivElement>(null)

  const graph = useRef<Graph | null>(null)
  const dnd = useRef<Dnd | null>(null)
  // const curCell = useRef<CellView<
  //   Cell<Cell.Properties>,
  //   CellView.Options
  // > | null>(null)
  //
  const [curCell, setCurCell] = useState<CellView<
    Cell<Cell.Properties>,
    CellView.Options
  > | null>(null)

  const pageInit = useCallback(() => {
    graph.current = x6Init()
    dnd.current = new Dnd({
      target: graph.current
    })
    graph.current.fromJSON(data)
  }, [])

  // const pageInit = () => {
  //   graph.current = x6Init()
  //   dnd.current = new Dnd({
  //     target: graph.current
  //   })
  //   graph.current.fromJSON(data)
  // }

  const changePortsVisible = (node: Cell, visible: boolean) => {
    const ports = document.querySelectorAll<HTMLElement>(
      `g[data-cell-id="${node.id}"] .x6-port-body`
    )
    ports.forEach((port) => {
      port.style.visibility = visible ? 'visible' : 'hidden'
    })
  }

  const handleShowPort = ({ cell }: { cell: Cell }) => {
    changePortsVisible(cell, true)
  }

  const handleHidePort = ({ cell }: { cell: Cell }) => {
    changePortsVisible(cell, false)
  }

  useEffect(() => {
    pageInit()
    graph.current?.use(
      new Selection({
        enabled: true
      })
    )
    console.log('useEffet....', graph.current)
    graph.current?.on('node:mouseenter', handleShowPort)
    graph.current?.on('node:mouseleave', handleHidePort)
    graph.current?.on('cell:selected', ({ cell }: { cell: Cell }) => {
      console.log('cell:selected', cell, cell.isEdge(), cell.isNode())
      let removeBtnCfg
      if (cell.isNode()) {
        const cellView = graph.current?.findView(cell) ?? null
        // curCell.current = cellView
        setCurCell(cellView)
        cellView?.addClass(`${cell.shape}-selected`)
        cellView?.addClass('kafka-node-selected')
        removeBtnCfg = { x: 0, y: 0, offset: { x: -5, y: -5 } }
      }
      cell.addTools({
        name: 'button-remove', // 工具名称
        args: removeBtnCfg // 工具对应的参数
      })
    })
    graph.current?.on('cell:unselected', ({ cell }: { cell: Cell }) => {
      console.log('cell.unselected.', cell)
      // const instance = getCurrentInstance()
      // instance.ctx.curCell = null
      if (cell.isEdge()) {
        cell.attr('line', { stroke: '#808080', strokeWidth: 1 })
      } else {
        const cellView = graph.current?.findView(cell)
        cellView && cellView.removeClass(`${cell.shape}-selected`)
      }
      cell.removeTools()
    })
    graph.current?.on('blank:click', ({ e, x, y }) => {
      // curCell.current = null
      setCurCell(null)
      console.log('blank.click.....', e, x, y)
    })

    return () => {
      graph.current?.off('node:mouseenter', handleShowPort)
      graph.current?.off('node:mouseleave', handleHidePort)
    }
  }, [])

  // useEffect(() => {
  //   const graph = new Graph({
  //     container: document.getElementById('container') as HTMLDivElement,
  //     width: 800,
  //     height: 600,
  //     background: {
  //       color: '#F2F7FA'
  //     }
  //   })
  //   graph.fromJSON(data)
  //   graph.centerContent()
  //   graph.use(
  //     new Snapline({
  //       enabled: true
  //     })
  //   )
  //   return () => graph && graph.clearCells()
  // }, [])

  return (
    <TaskWrapper className="task">
      <LeftSideBar graph={graph} dnd={dnd} />
      <CenterWrapper id="container" className="app-content" />
      <RightCellInfo graph={graph} curCell={curCell} />
    </TaskWrapper>
  )
}

export default memo(Dashboard)
