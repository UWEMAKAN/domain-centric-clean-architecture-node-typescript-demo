import IGetCustomersListQuery from './IGetCustomersListQuery';
import CustomerModel from './CustomerModel';
import ICustomerRepository from '../../interfaces/persistence/ICustomerRepository';

class GetCustomersListQuery implements IGetCustomersListQuery {
  private readonly _repository: ICustomerRepository;

  constructor(repository: ICustomerRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<Array<CustomerModel>> {
    const customers = await this._repository.getAll();
    return customers.map((c) => {
      let customer: CustomerModel = new CustomerModel();
      customer.Id = c.Id;
      customer.Name = c.Name;
      return customer;
    });
  }
}

export default GetCustomersListQuery;
