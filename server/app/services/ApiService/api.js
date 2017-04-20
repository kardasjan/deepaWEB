import dbToApiErrors from '../ErrorService/mongoose';
import joiToApiErrors from '../ErrorService/joi';

/**
 * The reason for existence of this code is structure, every
 * API Response should have data and errors property
 */
export default class ApiService {
  
  /**
   * Creates API Response body
   *
   * @param httpCode
   * @param errors
   * @param data
   * @returns {{httpCode: *, status: *, errors: *, data: *}}
   */
  static create ( status: number, errors: Array<string> | boolean, data: Object ): Object {
    return {
      status,
      body: {
        errors,
        data
      }
    };
  }

  static send (msg: Object, res: Object): Object {
    return res.status(msg.status).json(msg.body);
  }

  static sendSuccess ( data: Object, res: Object ): Object {
    return this.send(this.create(200, false, data), res);
  }

  static sendFailed ( status: number, errors: Array<string> = [], data: Object = {}, res: Object ): Object {
    return this.send(this.create(status, errors, data), res);
  } 

  static badMongooseValidationResponse (err: Error, res: Object): Object {
    const errors = dbToApiErrors(err);
    return this.send(this.create(400, errors, {}), res);
  }

  static badJoiValidationResponse (error: Object, res: Object): Object {
    const errors = joiToApiErrors(error);
    return this.send(this.create(400, errors, {}), res);
  }
}