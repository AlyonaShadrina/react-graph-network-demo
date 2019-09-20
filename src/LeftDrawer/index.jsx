import Drawer from '@material-ui/core/Drawer';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CodeAccordion from './CodeAccordion'


const Switcher = ({ props, prop, handlePropsChange, Line}) => {
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
                            <div key={i}>
                                <TextField
                                    value={props[prop]}
                                    onChange={(e) => handlePropsChange({ name: prop, value: e.target.value })}
                                    label={prop}
                                    margin="normal"
                                />
                            </div>
                        )
                    })
                }
                <CodeAccordion props={props}/>
            </Box>
        </Drawer>
    )
};

export default LeftDrawer;