import { createConnection } from 'typeorm';
import Customer from '../../domain/customers/Customer';
import connection from '../connection';
import CustomerRepository from './CustomerRepository';
import * as mockEntities from '../../../tools/mockEntities';

describe('CustomerRepository', () => {
  // beforeAll(async () => {
  //   await connection.create();
  // });

  // afterAll(async () => {
  //   await connection.close();
  // });

  // beforeEach(async () => {
  //   await connection.clear();
  // });

  // it('create customer', async (done) => {
  //   const customer: Customer = mockEntities.customers[1];
  //   const connectionName: string = 'test';
  //   const repository: CustomerRepository = new CustomerRepository(createConnection, connectionName);
  //   await repository.add(customer);
  //   done();
  // });
  it('should ', () => {

  });
});
