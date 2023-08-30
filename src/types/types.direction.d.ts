// Types
import type Sign from './types.sign';

interface Direction {
    id: string,
    readonly sign: [Sign, Sign]
};

export default Direction;
