const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'kafka-node',
      x: 40,
      y: 40,
      label: 'hello'
    },
    {
      id: 'node2',
      shape: 'clickhouse-node',
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
