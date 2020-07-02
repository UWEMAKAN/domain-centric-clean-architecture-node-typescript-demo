import { createConnection, getConnection, getRepository, EntitySchema } from 'typeorm';
import IEntity from '../domain/common/IEntity';

const connection = {
  async create() {
    await createConnection();
  },

  async close() {
    await getConnection().close();
  },

  async clear() {
    const connection = getConnection('test')
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  },

  async getRepo(repoName: string) {
    return getRepository(repoName);
  }
};

export default connection;
