import CustomerModel from './CustomerModel';

export default interface IGetCustomersListQuery {
  execute(): Array<CustomerModel>;
}
