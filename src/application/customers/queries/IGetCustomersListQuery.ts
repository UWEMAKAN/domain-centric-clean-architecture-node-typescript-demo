import CustomerModel from './CustomerModel';

export default interface IGetCustomersListQuery {
  execute(): Promise<Array<CustomerModel>>;
}
