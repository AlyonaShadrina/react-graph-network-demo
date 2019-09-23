export const codeLine =
    `
const Line = ({ link, ...restProps }) => {
  let stroke = '#000';
  return (
      <>
        <line
            {...restProps}
            stroke={stroke}
        />
      </>
  )
};
`;
export const codeNode =
    `
const Node = ({ node }) => {
  return (
      <>
        {
          node.img
              ? (
                  <image
                      href={node.img}
                      x="0"
                      y="0"
                      height="50" width="50"
                      style={{
                        transform: 'translate(-25px, -25px)'
                      }}
                  />
              )
              : (
                  <circle fill="lightgrey" stroke="grey" r={10} />
              )
        }
        <g position="relative">
          <text>
            {node.family}
          </text>
          <text style={{ transform: 'translateY(16px)' }}>
            {node.id}
          </text>
        </g>

      </>
  );
};
`;
