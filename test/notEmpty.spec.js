import test from 'tape';
import {notEmpty} from '../src';

test('#notEmpty', ({equal, plan}) => {
  plan(2);

  equal(notEmpty({foo: 'bar'}), true, 'true with values');
  equal(notEmpty([]), false, 'false when empty');
});
