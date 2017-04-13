import chai from 'chai';
import chaiHttp from 'chai-http';
import MockService from '../../../services/MockService/mock';
import config from '../../../config';

chai.use(chaiHttp);

let expect = chai.expect;

describe('#Sites: getAll()', () => {
  before(() => {
    MockService.mockDefault();
  });

  it('Should return correct data', async (): void => {
    await chai.request(config.PROJECT_URL)
      .get('/sites/')
      .set('apikey', config.WEB_APIKEY)
      .set('filter', '{}')
      .then((res: Object) => {
        console.log(res.body);
        expect(res).to.have.status(200);
      });
  });
});