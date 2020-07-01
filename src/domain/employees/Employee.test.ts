import Employee from './Employee';
import * as mockEntities from '../../../tools/mockEntities';

it('should create a employee with field id: number and name: string', () => {
  const employee: Employee = mockEntities.employees[1];

  expect.assertions(2);
  expect(employee instanceof Employee).toBeTruthy();
  expect(employee).toMatchObject({
    id: expect.any(Number),
    name: expect.any(String)
  });
});

it('should set and get id', () => {
  const employee: Employee = mockEntities.employees[1];

  employee.Id = 2;

  expect.assertions(1);
  expect(employee.Id).toEqual(2);
});

it('should set and get name', () => {
  const employee: Employee = mockEntities.employees[1];

  employee.Name = 'Kufre';
  expect.assertions(1);
  expect(employee.Name).toEqual('Kufre');
});
