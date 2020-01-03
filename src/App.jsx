import React, { useState } from 'react';
import Graph from 'react-graph-network';

import Line from './elements/Line';
import Node from './elements/Node';
import LeftDrawer from './LeftDrawer';
import tolstoy from './tolstoy';
import TopPanel from './TopPanel';


const App = () => {
    const [opened, setOpened] = useState(false);
    const openDrawer = () => setOpened(true);

    const [props, setProps] = useState({
        nodeDistance: 300,
        zoomDepth: 3,
        hoverOpacity: .3,
        enableDrag: true,
        pullIn: false,
    });
    const handlePropsChange = ({ name, value }) => {
        setProps({ ...props, [name]: value })
    };

    return (
        <div style={{ height: '100vh' }}>
            <LeftDrawer
                opened={opened}
                setOpened={setOpened}
                props={props}
                handlePropsChange={handlePropsChange}
            />
            <TopPanel openDrawer={openDrawer} />
            <Graph
                data={tolstoy}
                NodeComponent={Node}
                LineComponent={Line}
                {...props}
            />
        </div>
    );
};

export default App;
