import test from 'tape';
import {bind} from '../src';
import {inc} from '../src';
import {pipeL} from '../src';

test('#pipeL', ({equal, plan}) => {
  plan(3);
  let i = 1;
  const mock = bind(pipeL, {log: (a) => equal(a, i++, 'logs pipe steps')});
  equal(mock(inc, inc, inc)(0), 3, 'processes pipe');
});
