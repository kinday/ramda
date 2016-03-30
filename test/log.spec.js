import test from 'tape';
import {bind} from '../';
import {log} from '../';

test('#log', ({equal, plan}) => {
  plan(2);
  const mock = bind(log, {log: (a) => equal(a, 'input', 'logs input')});
  equal(mock('input'), 'input', 'returns input');
});
