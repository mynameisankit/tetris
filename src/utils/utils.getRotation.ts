// Utils
import getDimension from '@/utils/utils.getDimension';

// Constants
import { QUADRANT_BY_CLOCKWISE_ANGLE } from '@/constants/constants.quadrant';

// Types
import type Dimension from '@/types/types.dimension';
import type Shape from '@/types/types.shape';
import type Coordinate from '@/types/types.coordinate';

// SRP
const getRotation = (
    shape: Shape,
    rotationAmount: number | string
): Shape => {
    const { height, width }: Dimension = getDimension(shape);

    const rotatedPieces = shape.pieces.map(([x, y]: Coordinate): Coordinate => {
        const xCoordinateSign = QUADRANT_BY_CLOCKWISE_ANGLE[rotationAmount].sign[0].numericSign;
        const yCoordinateSign = QUADRANT_BY_CLOCKWISE_ANGLE[rotationAmount].sign[1].numericSign;

        const rotatedAndShiftedPiece = [
            (x * xCoordinateSign) + width,
            (y * yCoordinateSign) + height,
        ] as Coordinate;
        return rotatedAndShiftedPiece;
    });

    const rotatedShape = { ...shape, pieces: rotatedPieces };
    return rotatedShape;
};

export default getRotation;
