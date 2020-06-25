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
  private readonly _customerRepository: ICustomerRepository;
  private readonly _employeeRepository: IEmployeeRepository;
  private readonly _productRepository: IProductRepository;
  private readonly _saleRepository: ISaleRepository;

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
      this._customerRepository = customerRepository;
      this._employeeRepository = employeeRepository;
      this._productRepository = productRepository;
      this._saleRepository = saleRepository;
  }
  /**
   * retrieves a customer by id
   * @param customerId id: number
   * @returns customer: Customer
   */
  public getCustomer(customerId: number): Customer {
    return this._customerRepository.get(customerId);
  }
  /**
   * retrieves an employee by id
   * @param employeeId id: number
   * @returns employee: Customer
   */
  public getEmployee(employeeId: number): Employee {
    return this._employeeRepository.get(employeeId);
  }
  /**
   * retrieves a product by id
   * @param productId id: number
   * @returns product: Product
   */
  public getProduct(productId: number): Product {
    return this._productRepository.get(productId);
  }
  /**
   * adds a sale to the Sale Repository
   * @param sale sale: Sale
   * @returns void
   */
  public addSale(sale: Sale): void {
    this._saleRepository.add(sale);
  }
}

export default SaleRepositoryFacade;
