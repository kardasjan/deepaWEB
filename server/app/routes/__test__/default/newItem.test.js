import chai from 'chai';
import chaiHttp from 'chai-http';
import config from '../../../config';
import MockService from '../../../services/MockService/mock';

// Chai settings
chai.use(chaiHttp);
const expect = chai.expect; // eslint-disable-line
const should = chai.should(); // eslint-disable-line

// Local test settings
const ROUTE_URL = '/default/';

// Define variables for all tests
let mock;
let jwt;

// Define local mock objects
const validItem = {
  name: 'Whatever',
  value: 12,
  active: false
};

const invalidItem = {
  name: 12,
  value: 'Whatever'
};

describe('Example: newItem', () => {
  before(async (): void => {
    mock = new MockService();
    await mock.mockDefault();
    await mock.getJwt()
      .then((token: string) => {
        jwt = token;
      });
  });

  describe('Should pass', () => {
    it('Create', async (): void => {
      await chai.request(config.PROJECT_URL)
        .post(ROUTE_URL)
        .set('token', jwt)
        .send({item: validItem})
        .then((res: Object) => {
          res.should.have.status(200);
          res.body.data.name.should.eq(validItem.name);
          res.body.data.value.should.eq(validItem.value);
          res.body.data.active.should.eq(validItem.active);
        });
    });
  });

  describe('Should not pass', () => {
    it('Create failed', async (): void => {
      await chai.request(config.PROJECT_URL)
        .post(ROUTE_URL)
        .set('token', jwt)
        .send({item: invalidItem})
        .catch((err: Error) => {
          err.response.should.have.status(400);
        });
    });
  });
});
