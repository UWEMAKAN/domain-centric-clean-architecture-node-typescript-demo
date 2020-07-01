import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import IEntity from '../common/IEntity';

@Entity()
class Product implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private price: number;

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

  public set Price(v: number) {
    this.price = v;
  }

  public get Price(): number {
    return this.price;
  }
}

export default Product;
