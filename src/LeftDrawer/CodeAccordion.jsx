import React from 'react';
import Box from '@material-ui/core/Box';
import { codeLine, codeNode } from './componentsCode';

const CodeAccordion = ({ props }) => {

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

    const codeExamples = [codeGraph, codeNode, codeLine];

    return (
        <>
            {
                codeExamples.map((code) => (
                    <Box style={{ backgroundColor: '#eee'}} px={2} pb={1} mb={2}>
                        <pre>
                            {code}
                        </pre>
                    </Box>
                ))
            }
        </>

    );
};

export default CodeAccordion;