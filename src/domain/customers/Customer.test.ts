import Customer from './Customer';

it('should create a customer with field id: number and name: string', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer();
  customer.id = id;
  customer.name = name;

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
  const customer: Customer = new Customer();
  customer.id = id;
  customer.name = name;

  customer.id = 2;

  expect.assertions(1);
  expect(customer.id).toEqual(2);
});

it('should set and get name', () => {
  const id: number = 1;
  const name: string = 'Uwem';
  const customer: Customer = new Customer();
  customer.id = id;
  customer.name = name;

  customer.name = 'Akan';

  expect.assertions(1);
  expect(customer.name).toEqual('Akan');
});
