import Customer from '../../domain/customers/Customer';
import AbstractRepository from './Repository';
import * as mockEntities from '../../../tools/mockEntities';
import * as typeorm from 'typeorm';

const customer = new Customer();
const customerId = 1;
const customerName = 'Daniel James';
customer.Id = customerId;
customer.Name = customerName;
const customers = [customer];

jest.mock('typeorm', () => ({
  Entity: () => jest.fn(),
  Column: () => jest.fn(),
  OneToOne: () => jest.fn(),
  JoinColumn: () => jest.fn(),
  PrimaryGeneratedColumn: () => jest.fn(),
  createConnection: jest.fn(() => Promise.resolve({
    close: jest.fn().mockReturnValue(Promise.resolve()),
    getRepository: jest.fn(() => Promise.resolve({
      find: jest.fn(() => Promise.resolve(customers)),
      findOneOrFail: jest.fn((id: number) => Promise.resolve(customer)),
      save: jest.fn().mockReturnValue(Promise.resolve()),
      remove: jest.fn().mockReturnValue(Promise.resolve())
    })),
  })),
  Connection: jest.fn(() =>
    Promise.resolve({
      getRepository: jest.fn().mockReturnValue(
        Promise.resolve({
          find: jest.fn(() => Promise.resolve(customers)),
          findOneOrFail: jest.fn((id: number) => Promise.resolve(customer)),
          save: jest.fn().mockReturnValue(Promise.resolve()),
          remove: jest.fn().mockReturnValue(Promise.resolve())
        })
      ),
      close: jest.fn().mockReturnValue(Promise.resolve())
    })
  ),
  getRepository: jest.fn().mockReturnValue(
    Promise.resolve({
      find: jest.fn(() => Promise.resolve(customers)),
      findOneOrFail: jest.fn((id: number) => Promise.resolve(customer)),
      save: jest.fn().mockReturnValue(Promise.resolve()),
      remove: jest.fn().mockReturnValue(Promise.resolve())
    })
  )
}));

describe('AbstractRepository', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('test add customer', async () => {
    const repository = new AbstractRepository(Customer, typeorm.createConnection, 'test');
    await repository.add(mockEntities.customers[1]);
    expect.assertions(1);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
  });

  it('test remove customer', async () => {
    const repository = new AbstractRepository(Customer, typeorm.createConnection, 'test');
    await repository.remove(mockEntities.customers[1]);
    expect.assertions(1);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
  });

  it('test get all customers', async () => {
    const repository = new AbstractRepository(Customer, typeorm.createConnection, 'test');
    const results = await repository.getAll();
    expect.assertions(3);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results[0]).toEqual(customer);
  });
  it('test get customer', async () => {
    const repository = new AbstractRepository(Customer, typeorm.createConnection, 'test');
    const id: number = 1;
    const result = await repository.get(id);
    expect.assertions(3);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(Customer);
    expect(result).toEqual(customer);
  });
});
