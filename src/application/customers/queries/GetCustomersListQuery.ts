import IGetCustomersListQuery from './IGetCustomersListQuery';
import CustomerModel from './CustomerModel';
import ICustomerRepository from '../../interfaces/persistence/ICustomerRepository';

class GetCustomerListQuery implements IGetCustomersListQuery {
  private readonly _repository: ICustomerRepository;

  constructor(repository: ICustomerRepository) {
    this._repository = repository;
  }

  public execute(): Array<CustomerModel> {
    const customers = this._repository.getAll();
    return customers.map((c) => {
      let customer: CustomerModel = new CustomerModel();
      customer.id = c.id;
      customer.name = c.name;
      return customer;
    });
  }
}

export default GetCustomerListQuery;
