import request, { Response } from 'supertest';
import { server } from './app';
import logger from './common/Logging/winston';

describe('Server Ok status', () => {
  afterAll(() => {
    server.close();
  });
  test('expect / to return 200', async () => {
    expect.assertions(1);
    const response: Response = await request(server)
      .get('/');
    expect(response.status).toEqual(200);
  });
});

describe('Testing all else /*', () => {
  afterAll(() => {
    server.close();
  });
  test('expect /all-else to return status 404', async () => {
    expect.assertions(1);
    const response: Response = await request(server)
      .get('/all-else');
    expect(response.status).toEqual(404);
  });
});
