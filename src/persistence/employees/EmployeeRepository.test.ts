import Employee from '../../domain/employees/Employee';
import EmployeeRepository from './EmployeeRepository';
import { createConnection } from 'typeorm';
import AbstractRepository from '../shared/Repository';

describe('EmployeeRepository', () => {
  it('should return an EmployeeRepository object', () => {
    const repository = new EmployeeRepository(Employee, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(EmployeeRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});
