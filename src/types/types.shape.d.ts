// Types
import type Coordinate from './types.coordinate';

interface Shape {
    id: string,
    readonly pieces: Array<Coordinate>,
};

export default Shape;
