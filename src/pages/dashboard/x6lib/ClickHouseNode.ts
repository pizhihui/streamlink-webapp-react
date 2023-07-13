import { Shape } from '@antv/x6'
import labeIcon from '@/assets/ch_logo_docs.svg'

export default class ClickHouseNode extends Shape.Rect {}
ClickHouseNode.config({
  inherit: 'rect',
  width: 180,
  height: 50,
  // 渲染节点/边时使用的 SVG/HTML 片段
  markup: [
    {
      tagName: 'rect', // 标签名称
      selector: 'body' // 选择器
    },
    {
      tagName: 'text',
      selector: 'label'
    },
    {
      tagName: 'image',
      selector: 'icon'
    }
  ],
  // 元素的默认属性键值对
  attrs: {
    // 指定 text 元素的样式
    label: {
      text: 'ClickHouse节点',
      fill: '#FF7A0B',
      strokeWidth: 0.4,
      fontSize: 12
    },
    // 指定 rect 元素的样式
    body: {
      stroke: '#8f8f8f',
      strokeWidth: 1,
      fill: '#fff',
      rx: 6,
      ry: 6
    },
    // 指定 image 元素的样式
    icon: {
      'xlink:href': labeIcon,
      width: 50,
      height: 30,
      x: 1,
      y: 0
    }
  },
  ports: {
    items: [
      { group: 'in', id: 'p_top' },
      { group: 'right-out', id: 'p_right' },
      { group: 'bottom-out', id: 'p_bottom' },
      { group: 'left-out', id: 'p_left' }
    ],
    groups: {
      in: {
        position: 'top',
        zIndex: 1,
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: {
              visibility: 'hidden'
            }
          }
        }
      },
      'bottom-out': {
        position: 'bottom',
        zIndex: 1,
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: {
              visibility: 'hidden'
            }
          }
        }
      },
      'right-out': {
        position: 'right',
        zIndex: 20,
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: {
              visibility: 'hidden'
            }
          }
        }
      },
      'left-out': {
        position: 'left',
        zIndex: 20,
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            stroke: '#31d0c6',
            strokeWidth: 2,
            fill: '#fff',
            style: {
              visibility: 'hidden'
            }
          }
        }
      }
    }
  }
})
