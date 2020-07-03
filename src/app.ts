import http, { Server } from 'http';
import express, { Response, Request } from 'express';
import logger from './common/Logging/winston';
import config from './config/appConfig';
import factory from './factory';
import routes from './services';

const app = express();
config(app);

const PORT = process.env.PORT || 4000;

const dependencies = factory('default');
const router = routes(dependencies);

app.use('/api/v1/', router);
app.get('/', (req: Request, res: Response) => res.send('Up and Running'));
app.all('*', (req: Request, res: Response) => {
  res.status(404);
  return res.send('Ooops! Not Found!!!');
});

export const server: Server = http.createServer(app);
server.listen(PORT, () => {
  logger.debug(`Listening on port ${PORT}`);
});

export default app;
