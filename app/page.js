'use client';

import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import defaultNodes from './nodes.js';
import defaultEdges from './edges.js';


function Flow() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow defaultNodes={defaultNodes} defaultEdges={defaultEdges} minZoom={0} fitView />
    </div>
  );
}

export default Flow;
