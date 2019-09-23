import React, { useState } from 'react';
import Graph from 'react-graph-network';
import MenuOpen from '@material-ui/icons/MenuOpen';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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

            <Grid container
                  justify="space-between"
                  style={{ position: 'absolute', zIndex: 0, }}
            >
                <Grid item>
                    <Box
                        p={2}
                    >
                        <IconButton
                            onClick={() => setOpened(true)}
                            title="open settings"
                        >
                            <MenuOpen />
                        </IconButton>
                    </Box>

                </Grid>

                <Grid item>
                    <Box
                        p={4}
                    >
                        <Box component="a" pr={4} href="https://www.npmjs.com/package/react-graph-network">
                            <svg viewBox="0 0 27.23 27.23" style={{ width: '22px' }}>
                                <rect fill="#999" width="27.23" height="27.23" rx="2"></rect><polygon fill="#fff" points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"></polygon>
                            </svg>
                        </Box>
                        <Box component="a" pr={2} href="https://github.com/AlyonaShadrina/react-graph-network-demo">
                            <svg
                                height="24"
                                className="octicon octicon-mark-github"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    fill="#999"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
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
