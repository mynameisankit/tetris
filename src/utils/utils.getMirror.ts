// Utils
import getRotation from '@/utils/utils.getRotation';

// Types
import type Shape from '@/types/types.shape';

const getMirror = (shape: Shape): Shape => getRotation(shape, -90);

export default getMirror;
