Demo for [react-graph-network npm package](https://www.npmjs.com/package/react-graph-network).

### Code example
```
<Graph
    data={tolstoy}
    NodeComponent={Node}
    LineComponent={Line}
    nodeDistance={300}
    zoomDepth={3}
    hoverOpacity={0.3}
    enableDrag={true}
    pullIn={false}
/>
```

#### `data` <small><small>[[code](https://github.com/AlyonaShadrina/react-graph-network-demo/blob/master/src/tolstoy.js)]</small></small>
Must have links and nodes props. Each node must have id prop. Each link must have source and target props with id as values.

#### `LineComponent`
If you have specific logic in your Line component, consider `link` prop will be both id and object.<br/>
For convenience, a link’s source and target properties are initialized using numeric or string identifiers rather than object references. When the link force is initialized (or re-initialized, as when the nodes or links change), any link.source or link.target property which is not an object is replaced by an object reference to the corresponding node with the given identifier (https://github.com/d3/d3-force#links).<br/>
**Be sure to handle `link` prop both as id and object in your Line component.**

```
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
```