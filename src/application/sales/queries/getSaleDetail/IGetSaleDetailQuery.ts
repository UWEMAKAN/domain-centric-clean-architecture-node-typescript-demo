import SaleDetailModel from './SaleDetailModel';

export default interface IGetSaleDetailQuery {
  execute(id: number): Promise<SaleDetailModel>;
}
