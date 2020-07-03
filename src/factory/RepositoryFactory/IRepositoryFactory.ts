import ICustomerRepository from '../../application/interfaces/persistence/ICustomerRepository';
import IEmployeeRepository from '../../application/interfaces/persistence/IEmployeeRespository';
import IProductRepository from '../../application/interfaces/persistence/IProductRepository';
import ISaleRepository from '../../application/interfaces/persistence/ISaleRepository';

export default interface IRepositoryFactory {
  customerRepository: ICustomerRepository;
  employeeRepository: IEmployeeRepository;
  productRepository: IProductRepository;
  saleRepository: ISaleRepository;
}
