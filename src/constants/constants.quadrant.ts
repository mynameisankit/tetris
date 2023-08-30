// Lodash
import _keyBy from 'lodash/keyBy';
import _mapValues from 'lodash/mapValues';

// Constants
import SIGN_BY_ID from './constants.sign';

// Types
import type Quadrant from '@/types/types.quadrant';

const FIRST_QUADRANT: Readonly<Quadrant> = {
    id: 'FIRST_QUADRANT',
    clockwiseAngle: 0,
    anticlockwiseAngle: 0,
    sign: [SIGN_BY_ID.POSITIVE, SIGN_BY_ID.POSITIVE],
};

const SECOND_QUADRANT: Readonly<Quadrant> = {
    id: 'SECOND_QUADRANT',
    clockwiseAngle: -270,
    anticlockwiseAngle: 90,
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.POSITIVE],
};

const THIRD_QUADRANT: Readonly<Quadrant> = {
    id: 'THIRD_QUADRANT',
    clockwiseAngle: -180,
    anticlockwiseAngle: 180,
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.NEGATIVE],
};

const FOURTH_QUADRANT: Readonly<Quadrant> = {
    id: 'FOURTH_QUADRANT',
    clockwiseAngle: -90,
    anticlockwiseAngle: 270,
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.POSITIVE],
};

const QUADRANTS: Array<Quadrant> = [FIRST_QUADRANT, SECOND_QUADRANT, THIRD_QUADRANT, FOURTH_QUADRANT];

const QUADRANT_BY_ID: Readonly<Record<string, Quadrant>> = _keyBy(QUADRANTS, 'id');

const QUADRANT_BY_CLOCKWISE_ANGLE: Readonly<Record<string, Quadrant>> = _keyBy(QUADRANTS, 'clockwiseAngle');

const QUADRANT_BY_ANTI_CLOCKWISE_ANGLE: Readonly<Record<string, Quadrant>> = _keyBy(QUADRANTS, 'anticlockwiseAngle');

const QUADRANT: Readonly<Record<string, string>> = _mapValues(QUADRANT_BY_ID, 'id');

export { QUADRANT, QUADRANT_BY_CLOCKWISE_ANGLE, QUADRANT_BY_ANTI_CLOCKWISE_ANGLE };
export default QUADRANT_BY_ID;
