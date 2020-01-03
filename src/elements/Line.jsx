import React from 'react';
import { colorSwitch } from '../helpers';
import tolstoy from '../tolstoy';


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

export default Line;
