import IRepositoryFactory from './IRepositoryFactory';
import ICustomerRepository from '../../application/interfaces/persistence/ICustomerRepository';
import IEmployeeRepository from '../../application/interfaces/persistence/IEmployeeRespository';
import IProductRepository from '../../application/interfaces/persistence/IProductRepository';
import ISaleRepository from '../../application/interfaces/persistence/ISaleRepository';
import CustomerRepository from '../../persistence/customers/CustomerRepository';
import EmployeeRepository from '../../persistence/employees/EmployeeRepository';
import ProductRepository from '../../persistence/products/ProductRepository';
import SaleRepository from '../../persistence/sales/SaleRepository';
import Customer from '../../domain/customers/Customer';
import Employee from '../../domain/employees/Employee';
import Product from '../../domain/products/Product';
import Sale from '../../domain/sales/Sale';

class RepositoryFactory implements IRepositoryFactory {
  public readonly customerRepository: ICustomerRepository;
  public readonly employeeRepository: IEmployeeRepository;
  public readonly productRepository: IProductRepository;
  public readonly saleRepository: ISaleRepository;

  constructor(createConnection: Function, connectionName: string) {
    this.customerRepository = new CustomerRepository(Customer, createConnection, connectionName);
    this.employeeRepository = new EmployeeRepository(Employee, createConnection, connectionName);
    this.productRepository = new ProductRepository(Product, createConnection, connectionName);
    this.saleRepository = new SaleRepository(Sale, createConnection, connectionName);
  }
}

export default RepositoryFactory;
