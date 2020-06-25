import SalesListItemModel from './SalesListItemModel';

export default interface IGetSalesListQuery {
  execute(): Array<SalesListItemModel>;
}
