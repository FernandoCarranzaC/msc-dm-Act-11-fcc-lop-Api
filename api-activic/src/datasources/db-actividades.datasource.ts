import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DBActividades',
  connector: 'memory',
  localStorage: 'DBActividades',
  file: 'DBActividades'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbActividadesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DBActividades';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DBActividades', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
