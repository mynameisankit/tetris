// Types
import type Shape from '@/types/types.shape';
import type Dimension from '@/types/types.dimension';
import type Coordinate from '@/types/types.coordinate';

// TODO: SRP
const getDimension = (shape: Shape): Dimension => {
    const extremeXCoordinates: {
        left: number,
        right: number
    } = { left: 0, right: 0 };
    const extremeYCoordinates: {
        top: number,
        bottom: number
    } = { top: 0, bottom: 0 };

    shape.pieces.forEach(([ x, y ]: Coordinate) => {
        extremeXCoordinates.right = Math.max(extremeXCoordinates.right, y as number);
        extremeXCoordinates.left = Math.min(extremeXCoordinates.left, y as number);

        extremeYCoordinates.top = Math.max(extremeYCoordinates.top, x as number);
        extremeYCoordinates.bottom = Math.min(extremeYCoordinates.bottom, x as number);
    });

    const dimension = {
        height: extremeYCoordinates.top - extremeYCoordinates.bottom,
        width: extremeXCoordinates.right - extremeXCoordinates.left
    };
    return dimension;
};

export default getDimension;
