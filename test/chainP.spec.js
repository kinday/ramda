import test from 'tape';
import {chainP} from '../';
import {inc} from '../';
import {pipeP} from '../';

test('#chainP', ({deepEqual, plan}) => {
  const fixture = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  const fn = (a) => a.then(inc);

  plan(1);

  pipeP(
    chainP(fn),
    (a) => deepEqual(a, [2, 3, 4], 'chains promises')
  )(fixture);
});
