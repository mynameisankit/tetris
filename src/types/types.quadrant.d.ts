// Types
import type Sign from '@/types/types.sign';

interface Quadrant {
    id: string,
    clockwiseAngle: number,
    anticlockwiseAngle: number,
    sign: Readonly<Array<Sign>>
};

export default Quadrant;
