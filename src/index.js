import ramda from 'ramda';
import chainP from './chainP';
import log from './log';
import pipeL from './pipeL';

const extensions = {
  chainP,
  log,
  pipeL,
};

export default Object.assign({}, ramda, extensions);
