import { DataSource } from 'typeorm';
import { Cartao } from '../entities/cartao.entity';
import { CARTAO_REPOSITORY, DATA_SOURCE } from '../../../constants';

export const cartaoProviders = [
  {
    provide: CARTAO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cartao),
    inject: [DATA_SOURCE],
  },
];
