import Drawer from '@material-ui/core/Drawer';
import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';


const Switcher = ({ props, prop, handlePropsChange, }) => {
    const [switchedOn, setSwitchedOn] = useState(props[prop]);

    const toggleState = (e) => {
        setSwitchedOn(e.target.checked);
        handlePropsChange({ name: prop, value: e.target.checked });
    };

    return (
        <div>
            {prop}
            <Switch
                checked={switchedOn}
                onChange={toggleState}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        </div>

    )
};

const LeftDrawer = ({ opened, setOpened, props, handlePropsChange }) => {
    return (
        <Drawer
            open={opened}
            onClose={() => setOpened(false)}
        >
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
                            {prop}
                            <Input
                                key={i}
                                value={props[prop]}
                                onChange={(e) => handlePropsChange({ name: prop, value: e.target.value })}
                            />
                        </div>

                    )
                })
            }
        </Drawer>
    )
};

export default LeftDrawer;