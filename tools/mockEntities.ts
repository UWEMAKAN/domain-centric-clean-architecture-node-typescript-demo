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
  product.Id = p.id;
  product.Name = p.name;
  product.Price = p.price;
  return product;
});

export const customers: Array<Customer> = mockData.customers.map((c) => {
  const customer: Customer = new Customer();
  customer.Id = c.id;
  customer.Name = c.name;
  return customer;
});

export const employees: Array<Employee> = mockData.employees.map((e) => {
  const employee: Employee = new Employee();
  employee.Id = e.id;
  employee.Name = e.name;
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
  sale.Id = id;
  sale.Date = date;
  sale.Customer = customer;
  sale.Employee = employee;
  sale.Product = product;
  sale.Quantity = quantity;
  sale.UnitPrice = product.Price;
  return sale;
});

export const customerRepository: ICustomerRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(customers)),
  get: jest.fn((id: number) => Promise.resolve(customers[id])),
  add: jest.fn((customer: Customer) => {
    customers.push(customer);
    return Promise.resolve();
  }),
  remove: jest.fn((customer: Customer) => {
    customers.filter((c) => c.Id !== customer.Id);
    return Promise.resolve();
  })
};

export const employeeRepository: IEmployeeRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(employees)),
  get: jest.fn((id: number) => Promise.resolve(employees[id])),
  add: jest.fn((employee: Employee) => {
    employees.push(employee);
    return Promise.resolve();
  }),
  remove: jest.fn((employee: Employee) => {
    employees.filter((e) => e.Id !== employee.Id);
    return Promise.resolve();
  })
};

export const productRepository: IProductRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(products)),
  get: jest.fn((id: number) => Promise.resolve(products[id])),
  add: jest.fn((product: Product) => {
    products.push(product);
    return Promise.resolve();
  }),
  remove: jest.fn((product: Product) => {
    products.filter((p) => p.Id !== product.Id);
    return Promise.resolve();
  })
};

export const saleRepository: ISaleRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(sales)),
  get: jest.fn((id: number) => Promise.resolve(sales[id])),
  add: jest.fn((sale: Sale) => {
    sales.push(sale);
    return Promise.resolve();
  }),
  remove: jest.fn((sale: Sale) => {
    sales.filter((s) => s.Id !== sale.Id);
    return Promise.resolve();
  })
};

export const saleFactory: ISaleFactory = {
  create: jest.fn((date: Date, customer: Customer, employee: Employee, product: Product, quantity: number) => {
    const id: number = 12;
    const sale: Sale = new Sale();
    sale.Id = id;
    sale.Date = date;
    sale.Customer = customer;
    sale.Employee = employee;
    sale.Product = product;
    sale.Quantity = quantity;
    sale.UnitPrice = product.Price;
    return sale;
  })
}

export const saleRepositoryFacade: ISaleRepositoryFacade = {
  getCustomer: jest.fn((customerId: number) => Promise.resolve(customers[customerId])),
  getEmployee: jest.fn((employeeId: number) => Promise.resolve(employees[employeeId])),
  getProduct: jest.fn((productId: number) => Promise.resolve(products[productId])),
  addSale: jest.fn((sale: Sale) => Promise.resolve())
};

export const unitOfWork: IUnitOfWork = {
  save: jest.fn()
};

export const inventoryService: IInventoryService = {
  notifySaleOcurred: jest.fn((productId: number, quantity: number) => Promise.resolve())
};

export const dateService: IDateService = {
  getDate: jest.fn().mockReturnValue(new Date())
};
