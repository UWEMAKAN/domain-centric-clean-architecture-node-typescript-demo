import * as mockEntities from '../../../../../tools/mockEntities';
import GetSalesListQuery from './GetSalesListQuery';
import SalesListItemModel from './SalesListItemModel';
import Sale from '../../../../domain/sales/Sale';

const query: GetSalesListQuery = new GetSalesListQuery(mockEntities.saleRepository);

describe('GetSalesListQuery', () => {
  it('should return a list of sales', async (done) => {
    const results: Array<SalesListItemModel> = await query.execute();
    expect.assertions(2);
    expect(results instanceof Array).toBeTruthy();
    expect(results).toHaveLength(10);
    done();
  });

  it('should be of type Sale and have properties of Sale and the correct values', async (done) => {
    const results: Array<SalesListItemModel> = await query.execute();
    const result = results[0];
    const sale: Sale = mockEntities.sales[0];
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
