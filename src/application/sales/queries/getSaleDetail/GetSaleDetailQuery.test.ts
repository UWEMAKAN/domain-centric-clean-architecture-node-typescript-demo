import * as mockEntities from '../../../../../tools/mockEntities';
import Sale from '../../../../domain/sales/Sale';
import GetSaleDetailQuery from './GetSaleDetailQuery';
import SaleDetailModel from './SaleDetailModel';

const repository = {
  getAll: jest.fn().mockReturnValue(mockEntities.sales),
  get: jest.fn((id: number) => mockEntities.sales[id]),
  add: jest.fn(),
  remove: jest.fn()
};
const query: GetSaleDetailQuery = new GetSaleDetailQuery(repository);

describe('GetSaleDetailQuery', () => {
  it('should return a Sale object with correct properties and values', () => {
    const result: SaleDetailModel = query.execute(1);
    const sale: Sale = mockEntities.sales[1];
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
