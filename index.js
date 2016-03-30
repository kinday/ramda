import ramda from 'ramda';
import {chainP} from './helpers';
import {log} from './helpers';
import {pipeL} from './helpers';

const extensions = {
  chainP,
  log,
  pipeL,
};

export default Object.assign({}, ramda, extensions);
