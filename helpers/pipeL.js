import {apply} from 'ramda';
import {bind} from 'ramda';
import {intersperse} from 'ramda';
import {pipe} from 'ramda';
import {log} from './';

export default function pipeL(...rest) {
  const logger = bind(log, this);
  return apply(pipe, intersperse(logger, rest));
}
