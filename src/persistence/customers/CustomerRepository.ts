import Customer from '../../domain/customers/Customer';
import ICustomerRepository from '../../application/interfaces/persistence/ICustomerRepository';
import AbstractRepository from '../shared/Repository';

class CustomerRepository extends AbstractRepository<Customer> implements ICustomerRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default CustomerRepository;
