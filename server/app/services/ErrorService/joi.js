/**
 * Convert Joi error object into API Format
 * @param {*} errors 
 */
export default function joiToApiErrors (errors: Object): Array<string> {
  let result = new Array();
  result.push('Joi Validation Error');
  errors.details.map((item: Object) => {
    result.push(item.message);
  });
  return result;
}
