import apply from 'ramda/src/apply';
import bind from 'ramda/src/bind';
import intersperse from 'ramda/src/intersperse';
import pipe from 'ramda/src/pipe';
import log from './log';

export default function pipeL(...rest) {
  const logger = bind(log, this);
  return apply(pipe, intersperse(logger, rest));
}
