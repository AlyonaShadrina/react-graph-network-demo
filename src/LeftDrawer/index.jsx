import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import React from 'react';
import CodeAccordion from './CodeAccordion'
import Switcher from './Switcher';


const LeftDrawer = ({ opened, setOpened, props, handlePropsChange }) => {

    const settings = Object.keys(props).map((prop, i) => {
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
        });

    return (
        <Drawer
            open={opened}
            onClose={() => setOpened(false)}
        >
            <Box p={2}>
                <IconButton onClick={() => setOpened(false)} title="close serttings panel">
                    <Close />
                </IconButton>
                {settings}
                <CodeAccordion props={props}/>
            </Box>
        </Drawer>
    )
};

export default LeftDrawer;