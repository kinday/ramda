import isEmpty from 'ramda/src/isEmpty';
import not from 'ramda/src/not';
import pipe from 'ramda/src/pipe';

export default pipe(isEmpty, not);
