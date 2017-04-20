import SiteController from '../../controllers/sites';
import UserController from '../../controllers/user';
import AuthController from '../AuthService/controller';
import ExampleController from '../../controllers/example';
import Site from '../../model/site';
import User from '../../model/user';
import Example from '../../model/example';
import MockSites from './siteItems';
import MockUsers from './userItems';
import MockExamples from './exampleItems';

class MockService {
  async mockSites (): void {
    await Site.remove().exec();
    await SiteController.addSite(MockSites.one);
    await SiteController.addSite(MockSites.two);
  }

  async mockUsers (): void {
    await User.remove().exec();
    await UserController.newFromObject(MockUsers.one);
    await UserController.newFromObject(MockUsers.two);
  }

  async mockExample (): void {
    await Example.remove().exec();
    await ExampleController.newFromObject(MockExamples.one);
    await ExampleController.newFromObject(MockExamples.two);
  }

  async mockDefault (): void {
    await this.mockUsers();
    await this.mockSites();
    await this.mockExample();
  }

  async getJwt (user: User | null): string {
    if (user) {
      return AuthController.createToken(user);
    }
    return await UserController.newFromObject(MockUsers.jwtUser)
      .then((user: User): Promise => {
        return AuthController.createToken(user);
      })
      .then((token: string): string => {
        return token;
      });
  }

  async getExample (filter: Object | null): Example {
    return await ExampleController.getByParam(filter);
  }
}

export default MockService;

// TODO: Fix tests (NOT FOUND response, it is not correct)