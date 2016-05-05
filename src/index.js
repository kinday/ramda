import ramda from 'ramda';
import chainP from './chainP';
import log from './log';
import notEmpty from './notEmpty';
import ofAll from './ofAll';
import pipeL from './pipeL';

const extensions = {
  chainP,
  log,
  notEmpty,
  ofAll,
  pipeL,
};

export default Object.assign({}, ramda, extensions);
