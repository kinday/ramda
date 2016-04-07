import bind from 'ramda/src/bind';
import curry from 'ramda/src/curry';
import map from 'ramda/src/map';
import pipeP from 'ramda/src/pipeP';
import unnest from 'ramda/src/unnest';

const all = bind(Promise.all, Promise);
const toPromise = bind(Promise.resolve, Promise);

export default curry((fn, iterableP) => pipeP(
  toPromise,
  map(fn),
  all,
  unnest
)(iterableP));
