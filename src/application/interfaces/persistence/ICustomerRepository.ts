import IRepository from './IRepository';
import Customer from '../../../domain/customers/Customer';

export default interface ICustomerRepository extends IRepository<Customer> {}
