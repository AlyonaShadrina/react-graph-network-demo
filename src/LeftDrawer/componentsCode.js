export const lineExample = {
    title: 'Line',
    description: 'If you have specific logic in your Line component, consider link could be both id and object component.',
    code: `
const Line = ({ link, ...restProps }) => {
    let familyMatch;

    tolstoy.nodes.find(obj => {
        if ((obj.id === link.source || obj.id === link.source.id) && obj.family) {
            familyMatch = obj.family.match(/Tolst|Trubetsk|Volkonsk|Gorchakov/);
        }
    });

    const stroke = colorSwitch(familyMatch);

    return (
        <line
            {...restProps}
            stroke={stroke}
        />
    )
};
`,
};
export const nodeExample = {
    title: 'Node',
    code: `
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
                            height={sizesImg.radius * 2}
                            width={sizesImg.radius * 2}
                            style={{
                                transform: \`translate(-\${sizesImg.radius}px, -\${sizesImg.radius}px)\`,
                            }}
                        />
                    )
                    : (
                        <circle
                            fill={\`light\${stroke}\`}
                            stroke={stroke}
                            r={sizes.radius}
                        />
                    )
            }
            <g style={{ fontSize: sizes.textSize + 'px' }}>
                <text
                    x={node.img ? sizesImg.radius + 7 : sizes.radius + 7}
                    y={node.img ? (sizesImg.radius / 2) - sizesImg.textSize : sizes.radius / 2}
                >
                    {node.family}
                </text>
            </g>

        </>
    );
};
`,
};
