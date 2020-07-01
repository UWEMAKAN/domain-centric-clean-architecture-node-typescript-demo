import { Repository, createConnection, Connection } from 'typeorm';
import Customer from '../../domain/customers/Customer';
import ICustomerRepository from '../../application/interfaces/persistence/ICustomerRepository';

class CustomerRepository implements ICustomerRepository {
  private readonly databaseConnection: Function;
  private readonly connectionName: string;
  constructor(createConnection: Function, connectionName: string) {
    this.databaseConnection = createConnection;
    this.connectionName = connectionName;
  }
  public async getAll(): Promise<Customer[]> {
    const connection: Connection = await this.databaseConnection(this.connectionName || 'default');
    const repository: Repository<Customer> = await connection.getRepository(Customer);
    const customers: Array<Customer> = await repository.find();
    connection.close();
    return customers;
  }
  public async get(id: number): Promise<Customer> {
    const connection: Connection = await this.databaseConnection(this.connectionName || 'default');
    const repository: Repository<Customer> = await connection.getRepository(Customer);
    const customer: Customer = await repository.findOneOrFail(id);
    connection.close();
    return customer;
  }
  public async add(entity: Customer): Promise<void> {
    const connection: Connection = await this.databaseConnection(this.connectionName || 'default');
    const repository: Repository<Customer> = await connection.getRepository(Customer);
    await repository.save(entity);
    connection.close();
    return Promise.resolve();
  }
  public async remove(entity: Customer): Promise<void> {
    const connection: Connection = await this.databaseConnection(this.connectionName || 'default');
    const repository: Repository<Customer> = await connection.getRepository(Customer);
    await repository.remove(entity);
    connection.close();
    return Promise.resolve();
  }
}

export default CustomerRepository;
