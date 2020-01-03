export const colorSwitch = (familyMatch) => {
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