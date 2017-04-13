/**
 * Base extendable error
 * http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax?answertab=active#tab-top
 */
export default class BaseError extends Error {
  constructor (message: string) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }
  }
}
