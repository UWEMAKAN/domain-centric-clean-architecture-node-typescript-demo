import IGetSalesListQuery from './IGetSalesListQuery';
import SalesListItemModel from './SalesListItemModel';
import ISaleRepository from '../../../interfaces/persistence/ISaleRepository';
import Sale from '../../../../domain/sales/Sale';

class GetSalesListQuery implements IGetSalesListQuery {
  private readonly _repository: ISaleRepository;

  constructor(repository: ISaleRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<Array<SalesListItemModel>> {
    const sales: Array<Sale> = await this._repository.getAll();
    return sales.map((p) => {
      return new SalesListItemModel(
        p.Id, p.Date, p.Customer.Name, p.Employee.Name,
        p.Product.Name, p.UnitPrice, p.Quantity, p.TotalPrice);
    });
  }
}

export default GetSalesListQuery;
