import http, { Server } from 'http';
import express, { Response, Request } from 'express';
import logger from './common/Logging/winston';
import config from './config/appConfig';
import { createConnection } from 'typeorm';
import CustomerController from './controllers/customers/CustomersController';
import GetCustomersListQuery from './application/customers/queries/GetCustomersListQuery';
import CustomerRepository from './persistence/customers/CustomerRepository';
import Customer from './domain/customers/Customer';

const app = express();
config(app);

const PORT = process.env.PORT || 4000;
const repository = new CustomerRepository(Customer, createConnection, 'default');
const query = new GetCustomersListQuery(repository);
const customerController = new CustomerController(query);

app.get('/', (req: Request, res: Response) => res.send('Up and Running'));
app.get('/api/v1/customers', customerController.getAll);
app.all('*', (req: Request, res: Response) => {
  res.status(404);
  return res.send('Ooops! Not Found!!!');
});

export const server: Server = http.createServer(app);
server.listen(PORT, () => {
  logger.debug(`Listening on port ${PORT}`);
});

export default app;
