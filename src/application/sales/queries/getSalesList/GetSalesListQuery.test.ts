import * as mockEntities from '../../../../../tools/mockEntities';
import GetSalesListQuery from './GetSalesListQuery';
import SalesListItemModel from './SalesListItemModel';
import Sale from '../../../../domain/sales/Sale';

const repository = {
  getAll: jest.fn().mockReturnValue(mockEntities.sales),
  get: jest.fn((id: number) => mockEntities.sales[id]),
  add: jest.fn(),
  remove: jest.fn()
};
const query: GetSalesListQuery = new GetSalesListQuery(repository);

describe('GetSalesListQuery', () => {
  it('should return a list of sales', () => {
    const results: Array<SalesListItemModel> = query.execute();
    expect.assertions(2);
    expect(results instanceof Array).toBeTruthy();
    expect(results).toHaveLength(10);
  });

  it('should be of type Sale and have properties of Sale and the correct values', () => {
    const result: SalesListItemModel = query.execute()[0];
    const sale: Sale = mockEntities.sales[0];
    expect.assertions(9);
    expect(result).toMatchObject({
      _id: expect.any(Number),
      _date: expect.any(Date),
      _customerName: expect.any(String),
      _employeeName: expect.any(String),
      _productName: expect.any(String),
      _unitPrice: expect.any(Number),
      _quantity: expect.any(Number),
      _totalPrice: expect.any(Number)
    });
    expect(result.id).toEqual(sale.id);
    expect(result.date).toEqual(sale.date);
    expect(result.customerName).toEqual(sale.customer.name);
    expect(result.employeeName).toEqual(sale.employee.name);
    expect(result.productName).toEqual(sale.product.name);
    expect(result.unitPrice).toEqual(sale.unitPrice);
    expect(result.quantity).toEqual(sale.quantity);
    expect(result.totalPrice).toEqual(sale.totalPrice);
  });
});
