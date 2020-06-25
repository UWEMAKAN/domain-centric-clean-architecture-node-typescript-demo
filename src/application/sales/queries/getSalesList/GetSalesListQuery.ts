import IGetSalesListQuery from './IGetSalesListQuery';
import SalesListItemModel from './SalesListItemModel';
import ISaleRepository from '../../../interfaces/persistence/ISaleRepository';
import Sale from '../../../../domain/sales/Sale';

class GetSalesListQuery implements IGetSalesListQuery {
  private readonly _repository: ISaleRepository;

  constructor(repository: ISaleRepository) {
    this._repository = repository;
  }

  public execute(): Array<SalesListItemModel> {
    const sales: Array<Sale> = this._repository.getAll();
    return sales.map((p) => {
      return new SalesListItemModel(
        p.id, p.date, p.customer.name, p.employee.name,
        p.product.name, p.unitPrice, p.quantity, p.totalPrice);
    });
  }
}

export default GetSalesListQuery;
