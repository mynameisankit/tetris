// Lodash
import _keys from 'lodash/keys';

// Utils
import getRotation from '@/utils/utils.getRotation';

// Constants
import { QUADRANT_BY_CLOCKWISE_ANGLE } from '@/constants/constants.quadrant';

// Types
import Shape from '@/types/types.shape';

const getAllRotations = (shape: Shape): Readonly<Array<Shape>> => {
    const allClockwiseAngles: Array<string> = _keys(QUADRANT_BY_CLOCKWISE_ANGLE);

    const allRotations = allClockwiseAngles.map(
        (clockwiseAngle: string) =>
            getRotation(shape, clockwiseAngle)
    );
    return allRotations;
};

export default getAllRotations;
