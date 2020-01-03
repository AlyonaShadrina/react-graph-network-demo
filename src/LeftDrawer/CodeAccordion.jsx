import React from 'react';
import Box from '@material-ui/core/Box';
import { lineExample, nodeExample } from './componentsCode';


const CodeAccordion = ({ props }) => {

    const graphExample = {
        code:
            `
    <Graph
        data={tolstoy}
        NodeComponent={Node}
        LineComponent={Line}
        nodeDistance={${props.nodeDistance}}
        zoomDepth={${props.zoomDepth}}
        hoverOpacity={${props.hoverOpacity}}
        enableDrag={${props.enableDrag}}
        pullIn={${props.pullIn}}
    />
    `
    };

    const codeExamples = [graphExample, nodeExample, lineExample];

    return (
        codeExamples.map((example, i) => (
            <Box >
                {example.title && <h2>{example.title}</h2>}
                {example.description && <p>{example.description}</p>}
                {example.code && <Box style={{ backgroundColor: '#eee'}} px={2} pb={1} mb={2} key={i}><pre>{example.code}</pre></Box>}
            </Box>
        ))
    );
};

export default CodeAccordion;