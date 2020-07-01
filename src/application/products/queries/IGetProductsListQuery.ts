import ProductModel from './ProductModel';

export default interface IGetProductsListQuery {
  execute(): Promise<Array<ProductModel>>;
}
