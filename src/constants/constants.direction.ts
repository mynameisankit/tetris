// Lodash
import _keyBy from 'lodash/keyBy';
import _mapValues from 'lodash/mapValues';

// Constants
import SIGN_BY_ID from '@/constants/constants.sign';

// Types
import type Direction from '@/types/types.direction';

const TOP: Readonly<Direction> = {
    id: 'TOP',
    sign: [SIGN_BY_ID.NO_SIGN, SIGN_BY_ID.POSITIVE],
};

const TOP_RIGHT: Readonly<Direction> = {
    id: 'TOP_RIGHT',
    sign: [SIGN_BY_ID.POSITIVE, SIGN_BY_ID.POSITIVE],
};

const RIGHT: Readonly<Direction> = {
    id: 'RIGHT',
    sign: [SIGN_BY_ID.POSITIVE, SIGN_BY_ID.NO_SIGN],
};

const BOTTOM_RIGHT: Readonly<Direction> = {
    id: 'BOTTOM_RIGHT',
    sign: [SIGN_BY_ID.POSITIVE, SIGN_BY_ID.NEGATIVE],
};

const BOTTOM: Readonly<Direction> = {
    id: 'BOTTOM',
    sign: [SIGN_BY_ID.NO_SIGN, SIGN_BY_ID.NEGATIVE],
};

const BOTTOM_LEFT: Readonly<Direction> = {
    id: 'BOTTOM_LEFT',
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.NEGATIVE],
};

const LEFT: Readonly<Direction> = {
    id: 'LEFT',
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.NO_SIGN],
};

const TOP_LEFT: Readonly<Direction> = {
    id: 'TOP_LEFT',
    sign: [SIGN_BY_ID.NEGATIVE, SIGN_BY_ID.POSITIVE],
};

const DIRECTIONS: Array<Direction> = [TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT];

const DIRECTION_BY_ID: Readonly<Record<string, Direction>> = _keyBy(DIRECTIONS, 'id');

const DIRECTION: Readonly<Record<string, string>> = _mapValues(DIRECTION_BY_ID, 'id');

export { DIRECTION };
export default DIRECTION_BY_ID;
