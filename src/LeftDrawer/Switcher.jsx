import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';


const Switcher = ({ props, prop, handlePropsChange, Line }) => {
    const [switchedOn, setSwitchedOn] = useState(props[prop]);

    const toggleState = (e) => {
        setSwitchedOn(e.target.checked);
        handlePropsChange({ name: prop, value: e.target.checked });
    };

    return (
        <Grid
            container
            justify="space-between"
            alignItems="center"
        >
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

export default Switcher;