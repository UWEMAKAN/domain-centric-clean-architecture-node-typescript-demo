import Customer from './Customer';

it('should create a customer with field id: number and name: string', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer(id, name);

  expect.assertions(2);
  expect(customer instanceof Customer).toBeTruthy();
  expect(customer).toMatchObject({
    _id: expect.any(Number),
    _name: expect.any(String)
  });
});

it('should set and get id', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer(id, name);

  customer.Id = 2;

  expect.assertions(1);
  expect(customer.Id).toEqual(2);
});

it('should set and get name', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer(id, name);

  customer.Name = 'Akan';

  expect.assertions(1);
  expect(customer.Name).toEqual('Akan');
});
