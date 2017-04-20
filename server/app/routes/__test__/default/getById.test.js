import chai from 'chai';
import chaiHttp from 'chai-http';
import config from '../../../config';
import MockService from '../../../services/MockService/mock';
import Example from '../../../model/example';

// Chai settings
chai.use(chaiHttp);
const expect = chai.expect; // eslint-disable-line
const should = chai.should(); // eslint-disable-line

// Local test settings
const ROUTE_URL = '/default/'; // /default/:id !!!

// Define variables for all tests
let mock;
let jwt;
let item;

describe('Example: getById', () => {
  before(async (): void => {
    mock = new MockService();
    await mock.mockDefault();
    await mock.getJwt()
      .then((token: string) => {
        jwt = token;
      });
    await mock.getExample()
      .then((ex: Example) => {
        item = ex;
      });
  });

  describe('Should pass', () => {
    it('Get item', async (): void => {
      console.log(item.id);
      await chai.request(config.PROJECT_URL)
        .get(ROUTE_URL + item.id)
        .set('token', jwt)
        .then((res: Object) => {
          res.should.have.status(200);
          res.body.data.should.contain(item);
        });
    });
  });

  describe('Should not pass', () => {
    it('Get item', async (): void => {
      await chai.request(config.PROJECT_URL)
        .get(ROUTE_URL + '123456789')
        .set('token', jwt)
        .catch((err: Error) => {
          err.response.should.have.status(400);
        });
    });
  });
});
