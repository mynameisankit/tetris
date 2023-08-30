// Lodash
import _keyBy from 'lodash/keyBy';
import _mapValues from 'lodash/mapValues';

// Types
import type Shape from '@/types/types.shape';

const L: Readonly<Shape> = {
    id: 'L',
    pieces: [[0, 0], [0, 1], [0, 2], [1, 0]],
};

const Stick: Readonly<Shape> = {
    id: 'Stick',
    pieces: [[0, 0], [0, 1], [0, 2], [0, 3]],
};

const S: Readonly<Shape> = {
    id: 'S',
    pieces: [[0, 0], [1, 0], [1, 1], [2, 1]],
};

const Square: Readonly<Shape> = {
    id: 'Square',
    pieces: [[0, 0], [0, 1], [1, 0], [1, 1]],
};

const Pyramid: Readonly<Shape> = {
    id: 'Pyramid',
    pieces: [[0, 0], [1, 0], [2, 0], [1, 1]],
};

const SHAPES: Array<Shape> = [L, Stick, S, Square, Pyramid];

const SHAPE_BY_ID: Readonly<Record<string, Shape>> = _keyBy(SHAPES, 'id');

const SHAPE: Readonly<Record<string, string>> = _mapValues(SHAPE_BY_ID, 'id');

export { SHAPE };
export default SHAPE_BY_ID;
