import Employee from './Employee';

it('should create a employee with field id: number and name: string', () => {
  const id: number = 1;
  const name: string = 'Isaac';
  const employee: Employee = new Employee(id, name);

  expect.assertions(2);
  expect(employee instanceof Employee).toBeTruthy();
  expect(employee).toMatchObject({
    _id: expect.any(Number),
    _name: expect.any(String)
  });
});

it('should set and get id', () => {
  const id: number = 1;
  const name: string = 'Isaac';
  const employee: Employee = new Employee(id, name);

  employee.Id = 2;

  expect.assertions(1);
  expect(employee.Id).toEqual(2);
});

it('should set and get name', () => {
  const id: number = 1;
  const name: string = 'Isaac';
  const employee: Employee = new Employee(id, name);

  employee.Name = 'Kufre';

  expect.assertions(1);
  expect(employee.Name).toEqual('Kufre');
});
