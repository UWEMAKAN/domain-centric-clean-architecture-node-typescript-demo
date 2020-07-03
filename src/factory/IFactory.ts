import IRepositoryFactory from './RepositoryFactory/IRepositoryFactory';
import IQueryFactory from './QueryFactory/IQueryFactory';
import ICommandFactory from './CommandFactory/ICommandFactory';

export default interface IFactory {
  repositoryFactory: IRepositoryFactory;
  queryFactory: IQueryFactory;
  commandFactory: ICommandFactory;
}
