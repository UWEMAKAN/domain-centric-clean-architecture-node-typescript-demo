import SalesListItemModel from './SalesListItemModel';

export default interface IGetSalesListQuery {
  execute(): Promise<Array<SalesListItemModel>>;
}
