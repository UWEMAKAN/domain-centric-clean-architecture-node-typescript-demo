import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import IEntity from '../common/IEntity';

@Entity()
class Employee implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  public set Id(v: number) {
    this.id = v;
  }

  public get Id(): number {
    return this.id;
  }

  public set Name(v: string) {
    this.name = v;
  }

  public get Name(): string {
    return this.name;
  }
}

export default Employee;
