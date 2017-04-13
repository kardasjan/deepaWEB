import SiteController from '../../controllers/sites';
import Site from '../../model/site';

const siteA = {
  name: 'Place',
  ip: '1.2.3.4'
};

const siteB = {
  name: 'Awesome place',
  ip: '5.5.5.5'
};

class MockService {

  async mockSites (): void{
    await Site.remove().exec();
    await SiteController.addSite(siteA);
    await SiteController.addSite(siteB);
  }

  async mockDefault (): void {
    await this.mockSites();
  }
}

export default MockService;
