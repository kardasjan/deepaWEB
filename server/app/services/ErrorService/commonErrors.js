import BaseError from './BaseError';
import ErrMsg from './messages/common';

class NotFoundError extends BaseError {
  constructor (message: string | undefined) { super(message ? message : ErrMsg.NOT_FOUND); }
}

export default {
  NotFoundError
};
