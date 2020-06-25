import IGetSaleDetailQuery from './IGetSaleDetailQuery';
import ISaleRepository from '../../../interfaces/persistence/ISaleRepository';
import SaleDetailModel from './SaleDetailModel';
import Sale from '../../../../domain/sales/Sale';

class GetSaleDetailQuery implements IGetSaleDetailQuery {
  private readonly _repository: ISaleRepository;

  constructor(repository: ISaleRepository) {
    this._repository = repository;
  }

  public execute(id: number): SaleDetailModel {
    const sale: Sale = this._repository.get(id);
    return new SaleDetailModel(
      sale.id, sale.date, sale.customer.name,
      sale.employee.name, sale.product.name,
      sale.unitPrice, sale.quantity, sale.totalPrice);
  }
}

export default GetSaleDetailQuery;
