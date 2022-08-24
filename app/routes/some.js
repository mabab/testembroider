import Route from '@ember/routing/route';

export default class SomeRoute extends Route {
  beforeModel(transition) {
    console.log('fsdfsd');
  }
}
