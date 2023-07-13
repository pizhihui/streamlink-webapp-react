import { Graph } from '@antv/x6'

const x6Init = () => {
  const graph = new Graph({
    container: document.getElementById('container') as HTMLDivElement,
    // width: 100%,
    // height: 100%,
    background: {
      color: '#F2F7FA'
    }
  })

  return graph
}

export default x6Init
