import Product from './Product';

it('should create a product with field id: number, name: string, and price: number', () => {
  const id: number = 1;
  const name: string = 'T-Shirt';
  const price: number = 200;
  const product: Product = new Product();
  product.id = id;
  product.name = name;
  product.price = price;

  expect.assertions(2);
  expect(product instanceof Product).toBeTruthy();
  expect(product).toMatchObject({
    _id: expect.any(Number),
    _name: expect.any(String),
    _price: expect.any(Number)
  });
});

it('should set and get id', () => {
  const id: number = 1;
  const name: string = 'Snickers';
  const price: number = 200;
  const product: Product = new Product();
  product.id = id;
  product.name = name;
  product.price = price;

  product.id = 2;

  expect.assertions(1);
  expect(product.id).toEqual(2);
});

it('should set and get name', () => {
  const id: number = 1;
  const name: string = 'Snickers';
  const price: number = 200;
  const product: Product = new Product();
  product.id = id;
  product.name = name;
  product.price = price;

  product.name = 'Jeans';

  expect.assertions(1);
  expect(product.name).toEqual('Jeans');
});

it('should set and get price', () => {
  const id: number = 1;
  const name: string = 'Snickers';
  const price: number = 200;
  const product: Product = new Product();
  product.id = id;
  product.name = name;
  product.price = price;

  product.price = 150;

  expect.assertions(1);
  expect(product.price).toEqual(150);
});
