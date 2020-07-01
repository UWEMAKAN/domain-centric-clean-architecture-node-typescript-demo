import IRepository from './IRepository';
import Product from '../../../domain/products/Product';

export default interface IProductRepository extends IRepository<Product> {}
