import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function CodeAccordion({ props }) {
    const classes = useStyles();

    const codeGraph =
        `
<Graph
    data={tolstoy}
    NodeComponent={Node}
    LineComponent={Line}
    nodeDistance=${props.nodeDistance}
    zoomDepth=${props.zoomDepth}
    hoverOpacity=${props.hoverOpacity}
    enableDrag=${props.enableDrag}
    pullIn=${props.pullIn}
/>
`;

    const codeLine =
        `
const Line = ({ link, ...restProps }) => {
  let stroke = '#000';
  if (link.source.fam) {
    if (link.source.fam.includes('Толст')) {
      stroke = 'red'
    }
  }
  return (
      <>
        <line
            stroke={stroke}
            {...restProps}
            marker-end="url(#markerArrow)"
        ></line>
        {link.type}
      </>
  )
};
`;
    const codeNode =
        `
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
        <g position="relative">
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
`;

    return (
        <>
            <Box style={{ backgroundColor: '#eee'}} px={2} pb={1} mb={2}>
                <pre>
                    {codeGraph}
                </pre>
                </Box>
                <Box style={{ backgroundColor: '#eee'}} px={2} pb={1} mb={2}>
                <pre>
                    {codeNode}
                </pre>
                </Box>
                <Box style={{ backgroundColor: '#eee'}} px={2} pb={1} mb={2}>
                <pre>
                    {codeLine}
                </pre>
            </Box>
        </>

    );
};
