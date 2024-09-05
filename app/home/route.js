import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service store;

  async model() {
    const data = await this.store.findAll('user');
    const item_id = '1';
    const product = data.find(({
      id
    }) => id === item_id);
    return product;
  }
}
