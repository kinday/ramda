import test from 'tape';
import {ofAll} from '../src';

test('#ofAll', ({end, deepEqual}) => {
  deepEqual(ofAll(0, 1, 2, 3, 4), [0, 1, 2, 3, 4], 'creates array');
  end();
});
