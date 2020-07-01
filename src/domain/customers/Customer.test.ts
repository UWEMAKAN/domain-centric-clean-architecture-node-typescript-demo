import Customer from './Customer';

it('should create a customer with field id: number and name: string', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer();
  customer.Id = id;
  customer.Name = name;

  expect.assertions(2);
  expect(customer instanceof Customer).toBeTruthy();
  expect(customer).toMatchObject({
    id: expect.any(Number),
    name: expect.any(String)
  });
});

it('should set and get id', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer();
  customer.Id = id;
  customer.Name = name;

  customer.Id = 2;

  expect.assertions(1);
  expect(customer.Id).toEqual(2);
});

it('should set and get name', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer();
  customer.Id = id;
  customer.Name = name;

  customer.Name = 'Akan';

  expect.assertions(1);
  expect(customer.Name).toEqual('Akan');
});
