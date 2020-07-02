import { createConnection } from 'typeorm';
import Sale from "../../domain/sales/Sale";
import SaleRepository from './SaleRepository';
import AbstractRepository from "../shared/Repository";

describe('SaleRepository', () => {
  it('should return a SaleRepository object', () => {
    const repository = new SaleRepository(Sale, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(SaleRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});
