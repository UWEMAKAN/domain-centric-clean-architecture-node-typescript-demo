import Product from '../../domain/products/Product';
import ProductRepository from './ProductRepository';
import { createConnection } from 'typeorm';
import AbstractRepository from '../shared/Repository';

describe('ProductRepository', () => {
  it('should return a ProductRepository object', () => {
    const repository = new ProductRepository(Product, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(ProductRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});
