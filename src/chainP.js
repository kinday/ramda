import {bind} from 'ramda';
import {curry} from 'ramda';
import {map} from 'ramda';
import {pipeP} from 'ramda';
import {unnest} from 'ramda';

const all = bind(Promise.all, Promise);
const toPromise = bind(Promise.resolve, Promise);

export default curry((fn, iterableP) => pipeP(
  toPromise,
  map(fn),
  all,
  unnest
)(iterableP));
