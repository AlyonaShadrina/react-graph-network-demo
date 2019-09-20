import React, { useState } from 'react';
import Graph from 'react-graph-network';
import LeftDrawer from './LeftDrawer';
import tolstoy from './tolstoy';


const Node = ({ node }) => {
  // console.log('node', node);
  return (
      <>
        {
          node.img
              ? (
                  <image
                      href={node.img}
                      x="0"
                      y="0"
                      height="50" width="50"
                      style={{
                        transform: 'translate(-25px, -25px)'
                      }}
                  />
              )
              : (
                  <circle fill="lightgrey" stroke="grey" r={10} />
              )
        }
        <g position="relative"
        >
          <text>
            {node.fam}
          </text>
          <text style={{ transform: 'translateY(16px)' }}>
            {node.id}
          </text>
        </g>

      </>
  );
};

// TODO: make component independent of restProps
const Line = ({ link, ...restProps }) => {
  let stroke = '#000';
  if (link.source.fam) {
    if (link.source.fam.includes('Толст')) {
      stroke = 'red'
    }
  }
  return (
      <>
        <line stroke={stroke} {...restProps}></line>
        {link.type}
      </>
  )
};



const App = () => {
    const [opened, setOpened] = useState(false);

    // const [propArray, setPropArray] = React.useState({
    //     enableDrag: false,
    // });
    //
    // const handleChange = name => event => {
    //     console.log('name', name);
    //     console.log('event.target.checked', event.target.checked);
    //     setPropArray({ ...propArray, [name]: event.target.checked });
    // };

    return (

        <div style={{ height: '100vh' }}>
            <LeftDrawer
                opened={opened}
                setOpened={setOpened}
            />
            <button onClick={() => setOpened(true)}>open settings</button>
            <Graph
                data={tolstoy}
                nodeDistance={200}
                NodeComponent={Node}
                LineComponent={Line}
                // pullIn
                zoomDepth={3}
                enableDrag
                hoverOpacity
            />
        </div>
    );
}

export default App;
