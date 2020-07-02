import Product from '../../domain/products/Product';
import IProductRepository from '../../application/interfaces/persistence/IProductRepository';
import AbstractRepository from '../shared/Repository';

class ProductRepository extends AbstractRepository<Product> implements IProductRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default ProductRepository;
