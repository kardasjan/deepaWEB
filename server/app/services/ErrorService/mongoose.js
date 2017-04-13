/**
 * Convert Joi error object into API Format
 * @param {*} errors 
 */
export default function dbToApiErrors (error: Object): Array<string> {
  let result = new Array();
  result.push(`Mongoose: ${error.message}`);
  for (var [key, value] of Object.entries(error.errors))
    result.push(value.message);
  return result;
}
