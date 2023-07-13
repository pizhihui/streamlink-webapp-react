import { LeftWrapper } from '@/pages/dashboard/cpns/LeftSideBar/style.ts'
import { Graph } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Node } from '@antv/x6/lib/model'
import React, { memo } from 'react'

interface IProps {
  children?: React.ReactNode
  graph: React.MutableRefObject<Graph | null>
  dnd: React.MutableRefObject<Dnd | null>
}

const LeftSideBar: React.FC<IProps> = ({ graph, dnd }) => {
  console.log('left.side.bar...', graph.current)
  const dragMouseDown = (e: React.MouseEvent) => {
    // (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(graph, dnd, e)
    const target = e.currentTarget
    const type = target.getAttribute('data-type') as string
    console.log('mouse.down.....', graph.current)
    const kNode = graph.current?.createNode({
      shape: type,
      width: 180,
      height: 50,
      label: 'kafka'
    }) as Node<Node.Properties>
    dnd.current?.start(kNode, e.nativeEvent)
  }
  return (
    <>
      <LeftWrapper>
        <div className="left-dragger-row">
          <p className="left-dragger-title">数据源</p>
          <div className="left-dragger-body">
            <div
              className="left-dragger-item kafka-node"
              data-type="kafka-node"
              onMouseDown={(e) => dragMouseDown(e)}
            ></div>
          </div>
        </div>

        <div className="left-dragger-row">
          <p className="left-dragger-title">算子</p>
          <div className="left-dragger-body">
            <div
              className="left-dragger-item hbase-node"
              data-type="hbase-node"
              onMouseDown={(e) => dragMouseDown(e)}
            ></div>
          </div>
        </div>

        <div className="left-dragger-row">
          <p className="left-dragger-title">存储</p>
          <div className="left-dragger-body">
            <div
              className="left-dragger-item clickhouse-node"
              data-type="clickhouse-node"
              onMouseDown={(e) => dragMouseDown(e)}
            ></div>
          </div>
        </div>
      </LeftWrapper>
    </>
  )
}

export default memo(LeftSideBar)
