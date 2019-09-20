import Drawer from '@material-ui/core/Drawer';
import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';


const Switcher = ({ label, setProp, value }) => {
    const [switchedOn, setSwitchedOn] = useState(value);

    console.log('setProp', setProp);

    const toggleState = (e) => {
        console.log('toggleState', e.target.checked)
        setSwitchedOn(e.target.checked);
        // e.target.value = e.target.checked;
        // setProp(e);
    };

    return (
        <div>
            {label}
            <Switch
                checked={switchedOn}
                onChange={toggleState}
                // value={switchedOn}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>

    )
};

const LeftDrawer = ({ opened, setOpened, propArray, handleChange }) => {
    return (
        <Drawer
            open={opened}
            onClose={() => setOpened(false)}
        >
            drawer
            {/*{*/}
            {/*    Object.keys(propArray).map((prop, i) => (*/}
            {/*        <Switcher*/}
            {/*            key={ i}*/}
            {/*            label={prop}*/}
            {/*            // value={propArray[prop]}*/}
            {/*            setProp={handleChange(prop)}/>*/}
            {/*    ))*/}
            {/*}*/}

        </Drawer>
    )
};

export default LeftDrawer;