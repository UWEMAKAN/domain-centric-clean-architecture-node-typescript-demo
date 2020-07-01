import IGetProductsListQuery from './IGetProductsListQuery';
import ProductModel from './ProductModel';
import IProductRepository from '../../interfaces/persistence/IProductRepository';

class GetProductsListQuery implements IGetProductsListQuery {
  private readonly _repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<Array<ProductModel>> {
    const products = await this._repository.getAll();
    return products.map((p) => {
      let product: ProductModel = new ProductModel();
      product.Id = p.Id;
      product.Name = p.Name;
      product.Price = p.Price;
      return product;
    });
  }
}

export default GetProductsListQuery;
