import ramda from 'ramda';
import {log} from './helpers';
import {pipeL} from './helpers';

const extensions = {
  log,
  pipeL,
};

export default Object.assign({}, ramda, extensions);
