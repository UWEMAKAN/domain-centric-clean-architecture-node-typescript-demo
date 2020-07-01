import * as mockEntities from '../../../../../tools/mockEntities';
import Sale from '../../../../domain/sales/Sale';
import GetSaleDetailQuery from './GetSaleDetailQuery';
import SaleDetailModel from './SaleDetailModel';
import { doesNotMatch } from 'assert';

const query: GetSaleDetailQuery = new GetSaleDetailQuery(mockEntities.saleRepository);

describe('GetSaleDetailQuery', () => {
  it('should return a Sale object with correct properties and values', async (done) => {
    const result: SaleDetailModel = await query.execute(1);
    const sale: Sale = mockEntities.sales[1];
    expect.assertions(9);
    expect(result).toMatchObject({
      id: expect.any(Number),
      date: expect.any(Date),
      customerName: expect.any(String),
      employeeName: expect.any(String),
      productName: expect.any(String),
      unitPrice: expect.any(Number),
      quantity: expect.any(Number),
      totalPrice: expect.any(Number)
    });
    expect(result.Id).toEqual(sale.Id);
    expect(result.Date).toEqual(sale.Date);
    expect(result.CustomerName).toEqual(sale.Customer.Name);
    expect(result.EmployeeName).toEqual(sale.Employee.Name);
    expect(result.ProductName).toEqual(sale.Product.Name);
    expect(result.UnitPrice).toEqual(sale.UnitPrice);
    expect(result.Quantity).toEqual(sale.Quantity);
    expect(result.TotalPrice).toEqual(sale.TotalPrice);
    done();
  });
});
