import React, { useState } from 'react';
import Graph from 'react-graph-network';
import MenuOpen from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import LeftDrawer from './LeftDrawer';
import tolstoy from './tolstoy';


const Node = ({ node }) => {
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

    const [props, setProps] = useState({
        nodeDistance: 300,
        zoomDepth: 3,
        hoverOpacity: .3,
        enableDrag: true,
        pullIn: false,
    });

    const handlePropsChange = ({ name, value }) => {
        setProps({ ...props, [name]: value})
    };

    return (

        <div style={{ height: '100vh' }}>
            <LeftDrawer
                opened={opened}
                setOpened={setOpened}
                props={props}
                handlePropsChange={handlePropsChange}
                setOpened={setOpened}
            />
            <Box p={2} style={{ position: 'absolute' }}>
                <IconButton onClick={() => setOpened(true)} title="open settings">
                    <MenuOpen />
                </IconButton>
            </Box>
            <Graph
                data={tolstoy}
                NodeComponent={Node}
                LineComponent={Line}
                {...props}
            />
        </div>
    );
}

export default App;
