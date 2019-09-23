import React, { useState } from 'react';
import Graph from 'react-graph-network';
import MenuOpen from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import LeftDrawer from './LeftDrawer';
import tolstoy from './tolstoy';

const colorSwitch = (familyMatch) => {
    let color = 'grey';

    if (familyMatch) {
        switch (familyMatch[0]) {
        case('Tolst'):
            color = 'seagreen';
            break;
        case('Trubetsk'):
            color = 'salmon';
            break;
        case('Volkonsk'):
            color = 'blue';
            break;
        case('Gorchakov'):
            color = 'skyblue';
            break;
        default:
            color = 'grey';
        }
    }

    return color;
};

const fontSize = 14;
const radius = 10;

const Node = ({ node }) => {
    // colors
    const familyMatch = node.family.match(/Tolst|Trubetsk|Volkonsk|Gorchakov/);
    const stroke = colorSwitch(familyMatch);

    // sizes
    const sizes = {
        radius: radius,
        textSize: fontSize,
        textX: radius * 1.5,
        textY: radius / 2,
    };
    const sizesImg = {
        radius: 30,
        textSize: fontSize,
        textX: 30 * 1.5,
        textY: 30 / 2,
    };

    return (
        <>
            {
                node.img
                    ? (
                        <image
                            href={node.img}
                            x="0"
                            y="0"
                            height={ sizesImg.radius * 2 }
                            width={ sizesImg.radius * 2 }
                            style={{
                                transform: `translate(-${sizesImg.radius}px, -${sizesImg.radius}px)`,
                            }}
                        />
                    )
                    : (
                        <circle
                            fill={`light${stroke}`}
                            stroke={stroke}
                            r={sizes.radius}
                        />
                    )
            }
            <g style={{ fontSize: sizes.textSize + 'px', }}>
                <text>
                    {/*{node.name}*/}
                </text>
                <text x={node.img ? sizesImg.radius + 7 : sizes.radius + 7 } y={node.img ? (sizesImg.radius / 2) - sizesImg.textSize : sizes.radius / 2}>
                    {node.family}
                </text>
            </g>

        </>
    );
};

const Line = ({ link, ...restProps }) => {
    let familyMatch;
    tolstoy.nodes.find(obj => {
        if (obj.id === link.source && obj.family) {
            familyMatch = obj.family.match(/Tolst|Trubetsk|Volkonsk|Gorchakov/);
        }
    });
    const stroke = colorSwitch(familyMatch);

    return (
        <>
            <line
                {...restProps}
                stroke={stroke}
            />
        </>
    )
};

const App = () => {
    const [opened, setOpened] = useState(false);

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
            <Box
                p={2}
                style={{ position: 'absolute' }}
            >
                <IconButton
                    onClick={() => setOpened(true)}
                    title="open settings"
                >
                    <MenuOpen />
                </IconButton>
            </Box>
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
