import ProductModel from './ProductModel';

export default interface IGetProductsListQuery {
  execute(): Array<ProductModel>;
}
