import Sale from '../../domain/sales/Sale';
import ISaleRepository from '../../application/interfaces/persistence/ISaleRepository';
import AbstractRepository from '../shared/Repository';

class SaleRepository extends AbstractRepository<Sale> implements ISaleRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default SaleRepository;
