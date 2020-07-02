import Customer from '../../domain/customers/Customer';
import CustomerRepository from './CustomerRepository';
import AbstractRepository from '../shared/Repository';
import { createConnection } from 'typeorm';

describe('CustomerRepository', () => {
  it('should return a CustomerRepository object', () => {
    const repository = new CustomerRepository(Customer, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(CustomerRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});

