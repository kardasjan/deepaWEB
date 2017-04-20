import Model from '../model/user';
import CommonErrors from '../services/ErrorService/commonErrors';

async function getAll (): Promise {
  return await Model.find().exec()
    .then((items: Model[]): Model[] => {
      if (items === null)
        throw new CommonErrors.NotFoundError();
      return items;
    });
}

async function newFromObject (item: Object): Promise {
  return await new Model(item).save();
}

async function deleteById (id: string): Promise {
  return await Model.findByIdAndRemove(id).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function updateById (id: string, values: Object): Promise {
  return await Model.findOneAndUpdate({id: id}, {$set: values}, {new: true}).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

async function getById (id: string): Promise {
  return await Model.findById(id).exec()
    .then((item: Model): Model => {
      if (item === null)
        throw new CommonErrors.NotFoundError();
      return item;
    });
}

export default {
  getAll,
  newFromObject,
  deleteById,
  updateById,
  getById
};
