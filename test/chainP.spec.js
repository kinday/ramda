import test from 'tape';
import {chainP} from '../src';
import {inc} from '../src';
import {pipeP} from '../src';

test('#chainP', ({deepEqual, plan}) => {
  const fixture = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
  const fn = (a) => a.then(inc);

  plan(1);

  pipeP(
    chainP(fn),
    (a) => deepEqual(a, [2, 3, 4], 'chains promises')
  )(fixture);
});
