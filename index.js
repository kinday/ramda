import ramda from 'ramda';
import {log} from './helpers';

const extensions = {
  log,
};

export default Object.assign({}, ramda, extensions);
