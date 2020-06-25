import IGetProductsListQuery from './IGetProductsListQuery';
import ProductModel from './ProductModel';
import IProductRepository from '../../interfaces/persistence/IProductRepository';

class GetProductsListQuery implements IGetProductsListQuery {
  private readonly _repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this._repository = repository;
  }

  public execute(): Array<ProductModel> {
    const products = this._repository.getAll();
    return products.map((p) => {
      let product: ProductModel = new ProductModel();
      product.id = p.id;
      product.name = p.name;
      product.price = p.price;
      return product;
    });
  }
}

export default GetProductsListQuery;
