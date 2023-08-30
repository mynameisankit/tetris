// Lodash
import _keyBy from 'lodash/keyBy';
import _mapValues from 'lodash/mapValues';

// Types
import type Sign from '@/types/types.sign';

const POSITIVE: Readonly<Sign> = {
    id: 'POSITIVE',
    sign: '+',
    numericSign: 1,
};

const NEGATIVE: Readonly<Sign> = {
    id: 'NEGATIVE',
    sign: '-',
    numericSign: -1,
};

const NO_SIGN: Readonly<Sign> = {
    id: 'NO_SIGN',
    sign: '',
    numericSign: 0,
};

const SIGNS: Array<Sign> = [POSITIVE, NEGATIVE, NO_SIGN];

const SIGN_BY_ID: Readonly<Record<string, Sign>> = _keyBy(SIGNS, 'id');

const SIGN: Readonly<Record<string, string>> = _mapValues(SIGN_BY_ID, 'id');

export { SIGN };
export default SIGN_BY_ID;
