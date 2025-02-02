import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import fetchPosts from '../redux/action/action';

const MindMapi = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.getPosts.posts);
  const loading = useSelector((state) => state.getPosts.loading);
  const error = useSelector((state) => state.getPosts.error);

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  // Transform posts data into nodes and edges for the mindmap
  const getNodesAndEdges = useCallback(() => {
    const nodes = [
      {
        id: 'root',
        data: { label: 'Posts Database' },
        position: { x: 250, y: 0 },
        type: 'input',
        style: { 
          background: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px'
        }
      }
    ];

    const edges = [];

    posts.forEach((post, index) => {
      // Create post node
      const postNodeId = `post-${post.id}`;
      nodes.push({
        id: postNodeId,
        data: { label: `Post ${post.id}` },
        position: { x: 0, y: (index + 1) * 100 },
        style: { 
          background: '#2196F3',
          color: 'white',
          padding: '10px',
          borderRadius: '5px'
        }
      });

      // Connect to root
      edges.push({
        id: `e-root-${postNodeId}`,
        source: 'root',
        target: postNodeId,
        type: 'smoothstep'
      });

      // Create title node
      const titleNodeId = `title-${post.id}`;
      nodes.push({
        id: titleNodeId,
        data: { label: post.title },
        position: { x: 200, y: (index + 1) * 100 },
        style: { 
          background: '#FF9800',
          padding: '10px',
          borderRadius: '5px',
          maxWidth: '200px'
        }
      });

      // Create body node
      const bodyNodeId = `body-${post.id}`;
      nodes.push({
        id: bodyNodeId,
        data: { label: post.body },
        position: { x: 400, y: (index + 1) * 100 },
        style: { 
          background: '#E91E63',
          padding: '10px',
          borderRadius: '5px',
          maxWidth: '300px'
        }
      });

      // Connect nodes
      edges.push({
        id: `e-${postNodeId}-${titleNodeId}`,
        source: postNodeId,
        target: titleNodeId,
        type: 'smoothstep'
      });
      edges.push({
        id: `e-${titleNodeId}-${bodyNodeId}`,
        source: titleNodeId,
        target: bodyNodeId,
        type: 'smoothstep'
      });
    });

    return { nodes, edges };
  }, [posts]);

  const { nodes, edges } = getNodesAndEdges();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <button onClick={handleFetchPosts} style={{ 
          margin: '20px',
          padding: '10px 15px',
          fontSize: '16px',
          alignSelf: 'center'
          }}
      >
        Mind-Map</button>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>}

      <div style={{ flex: 1 }}>
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default MindMapi;