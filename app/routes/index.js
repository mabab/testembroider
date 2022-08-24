import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      {
        name: 'product 1',
        description: 'description 1',
      },
      {
        name: 'product 2',
        description: 'description 2',
      },
      {
        name: 'product 3',
        description: 'description 3',
      },
    ];
  }
}
