import IGetSaleDetailQuery from './IGetSaleDetailQuery';
import ISaleRepository from '../../../interfaces/persistence/ISaleRepository';
import SaleDetailModel from './SaleDetailModel';
import Sale from '../../../../domain/sales/Sale';

class GetSaleDetailQuery implements IGetSaleDetailQuery {
  private readonly _repository: ISaleRepository;

  constructor(repository: ISaleRepository) {
    this._repository = repository;
  }

  public async execute(id: number): Promise<SaleDetailModel> {
    const sale: Sale = await this._repository.get(id);
    return new SaleDetailModel(
      sale.Id, sale.Date, sale.Customer.Name,
      sale.Employee.Name, sale.Product.Name,
      sale.UnitPrice, sale.Quantity, sale.TotalPrice);
  }
}

export default GetSaleDetailQuery;
