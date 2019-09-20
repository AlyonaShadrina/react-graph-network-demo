import Drawer from '@material-ui/core/Drawer';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Graph from 'react-graph-network';
import tolstoy from './tolstoy';


const Switcher = ({ props, prop, handlePropsChange, }) => {
    const [switchedOn, setSwitchedOn] = useState(props[prop]);

    const toggleState = (e) => {
        setSwitchedOn(e.target.checked);
        handlePropsChange({ name: prop, value: e.target.checked });
    };

    return (
        <Grid container justify="space-between" alignItems="center">
            <Grid item>
                {prop}
            </Grid>
            <Grid item>
                <Switch
                    checked={switchedOn}
                    onChange={toggleState}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Grid>

        </Grid>
    )
};

const LeftDrawer = ({ opened, setOpened, props, handlePropsChange }) => {

    const code =
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

    return (
        <Drawer
            open={opened}
            onClose={() => setOpened(false)}
        >
            <Box p={2}>
                <IconButton onClick={() => setOpened(false)} title="close serttings panel">
                    <Close />
                </IconButton>
                {
                    Object.keys(props).map((prop, i) => {
                        if (typeof props[prop] === 'boolean') {
                            return (
                                <Switcher
                                    key={i}
                                    handlePropsChange={handlePropsChange}
                                    props={props}
                                    prop={prop}
                                />
                            )
                        }
                        return (
                            <div>
                                <TextField
                                    key={i}
                                    value={props[prop]}
                                    onChange={(e) => handlePropsChange({ name: prop, value: e.target.value })}
                                    label={prop}
                                    margin="normal"
                                />
                            </div>
                        )
                    })
                }
                <Box style={{ backgroundColor: '#eee'}} px={2} pb={1}>
                    <pre>
                        {code}
                    </pre>
                </Box>
            </Box>
        </Drawer>
    )
};

export default LeftDrawer;