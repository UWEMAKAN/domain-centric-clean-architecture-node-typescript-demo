import Sale from '../src/domain/sales/Sale';
import Customer from '../src/domain/customers/Customer';
import Employee from '../src/domain/employees/Employee';
import Product from '../src/domain/products/Product';
import * as mockData from './mockData';
import ICustomerRepository from '../src/application/interfaces/persistence/ICustomerRepository';
import IEmployeeRepository from '../src/application/interfaces/persistence/IEmployeeRespository';
import IProductRepository from '../src/application/interfaces/persistence/IProductRepository';
import ISaleRepository from '../src/application/interfaces/persistence/ISaleRepository';
import IUnitOfWork from '../src/application/interfaces/persistence/IUnitOfWork';
import IInventoryService from '../src/infrastructure/inventory/InventoryService';
import ISaleRepositoryFacade from '../src/application/sales/commands/createSale/repository/ISaleRepositoryFacade';
import ISaleFactory from '../src/application/sales/commands/createSale/factory/ISaleFactory';
import IDateService from '../src/common/DateTime/IDateService';


export const products: Array<Product> = mockData.products.map((p) => {
  const product: Product = new Product();
  product.id = p.id;
  product.name = p.name;
  product.price = p.price;
  return product;
});
export const customers: Array<Customer> = mockData.customers.map((c) => {
  const customer: Customer = new Customer();
  customer.id = c.id;
  customer.name = c.name;
  return customer;
});
export const employees: Array<Employee> = mockData.employees.map((e) => {
  const employee: Employee = new Employee();
  employee.id = e.id;
  employee.name = e.name;
  return employee;
});
export const sales: Array<Sale> = mockData.customers.map((c, i) => {
  const id: number = i + 1;
  const date: Date = new Date();
  const customer: Customer = customers[i];
  const employee: Employee = employees[i];
  const product: Product = products[i];
  const quantity: number = Math.floor(Math.random() * 10) + 1;
  const sale: Sale = new Sale();
  sale.id = id;
  sale.date = date;
  sale.customer = customer;
  sale.employee = employee;
  sale.product = product;
  sale.quantity = quantity;
  sale.unitPrice = product.price;
  return sale;
});

export const customerRepository: ICustomerRepository = {
  getAll: jest.fn().mockReturnValue(customers),
  get: jest.fn((id: number) => customers[id]),
  add: jest.fn((customer: Customer) => customers.push(customer)),
  remove: jest.fn((customer: Customer) => customers.filter((c) => c.id !== customer.id))
};

export const employeeRepository: IEmployeeRepository = {
  getAll: jest.fn().mockReturnValue(employees),
  get: jest.fn((id: number) => employees[id]),
  add: jest.fn((employee: Employee) => employees.push(employee)),
  remove: jest.fn((employee: Employee) => employees.filter((e) => e.id !== employee.id))
};

export const productRepository: IProductRepository = {
  getAll: jest.fn().mockReturnValue(products),
  get: jest.fn((id: number) => products[id]),
  add: jest.fn((product: Product) => products.push(product)),
  remove: jest.fn((product: Product) => products.filter((p) => p.id !== product.id))
};

export const saleRepository: ISaleRepository = {
  getAll: jest.fn().mockReturnValue(sales),
  get: jest.fn((id: number) => sales[id]),
  add: jest.fn((sale: Sale) => sales.push(sale)),
  remove: jest.fn((sale: Sale) => sales.filter((s) => s.id !== sale.id))
};

export const saleFactory: ISaleFactory = {
  create: jest.fn((date: Date, customer: Customer, employee: Employee, product: Product, quantity: number) => {
    const id: number = 12;
    const sale: Sale = new Sale();
    sale.id = id;
    sale.date = date;
    sale.customer = customer;
    sale.employee = employee;
    sale.product = product;
    sale.quantity = quantity;
    sale.unitPrice = product.price;
    return sale;
  })
}

export const saleRepositoryFacade: ISaleRepositoryFacade = {
  getCustomer: jest.fn((customerId: number) => customers[customerId]),
  getEmployee: jest.fn((employeeId: number) => employees[employeeId]),
  getProduct: jest.fn((productId: number) => products[productId]),
  addSale: jest.fn((sale: Sale) => {
    return
  })
};

export const unitOfWork: IUnitOfWork = {
  save: jest.fn()
};

export const inventoryService: IInventoryService = {
  notifySaleOcurred: jest.fn((productId: number, quantity: number) => {
    return
  })
};

export const dateService: IDateService = {
  getDate: jest.fn().mockReturnValue(new Date())
};
