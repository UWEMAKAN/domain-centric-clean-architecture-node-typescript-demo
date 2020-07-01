import ISaleRepositoryFacade from './ISaleRepositoryFacade';
import Customer from '../../../../../domain/customers/Customer';
import Employee from '../../../../../domain/employees/Employee';
import Product from '../../../../../domain/products/Product';
import Sale from '../../../../../domain/sales/Sale';
import ICustomerRepository from '../../../../interfaces/persistence/ICustomerRepository';
import IEmployeeRepository from '../../../../interfaces/persistence/IEmployeeRespository';
import IProductRepository from '../../../../interfaces/persistence/IProductRepository';
import ISaleRepository from '../../../../interfaces/persistence/ISaleRepository';


class SaleRepositoryFacade implements ISaleRepositoryFacade {
  private readonly customerRepository: ICustomerRepository;
  private readonly employeeRepository: IEmployeeRepository;
  private readonly productRepository: IProductRepository;
  private readonly saleRepository: ISaleRepository;

  /**
   * creates a facade to simplify Sale related operations
   * @param customerRepository customerRepository: ICustomerRepository for customer operations
   * @param employeeRepository employeeRepository: IEmployeeRepository for employee operations
   * @param productRepository productRepository: IEmployeeRepository for product operations
   * @param saleRepository saleRepository: ISaleRepository for sale operations
   */
  constructor(
    customerRepository: ICustomerRepository,
    employeeRepository: IEmployeeRepository,
    productRepository: IProductRepository,
    saleRepository: ISaleRepository) {
      this.customerRepository = customerRepository;
      this.employeeRepository = employeeRepository;
      this.productRepository = productRepository;
      this.saleRepository = saleRepository;
  }
  /**
   * retrieves a customer by id
   * @param customerId id: number
   * @returns customer: Customer
   */
  public async getCustomer(customerId: number): Promise<Customer> {
    return this.customerRepository.get(customerId);
  }
  /**
   * retrieves an employee by id
   * @param employeeId id: number
   * @returns employee: Customer
   */
  public async getEmployee(employeeId: number): Promise<Employee> {
    return this.employeeRepository.get(employeeId);
  }
  /**
   * retrieves a product by id
   * @param productId id: number
   * @returns product: Product
   */
  public async getProduct(productId: number): Promise<Product> {
    return this.productRepository.get(productId);
  }
  /**
   * adds a sale to the Sale Repository
   * @param sale sale: Sale
   * @returns void
   */
  public async addSale(sale: Sale): Promise<void> {
    this.saleRepository.add(sale);
  }
}

export default SaleRepositoryFacade;
