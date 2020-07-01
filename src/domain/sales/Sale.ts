import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import IEntity from '../common/IEntity';
import Customer from '../customers/Customer';
import Employee from '../employees/Employee';
import Product from '../products/Product';

@Entity()
class Sale implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private quantity: number;

  @Column()
  private totalPrice: number;

  @Column()
  private unitPrice: number;

  @Column()
  private date: Date;

  @OneToOne(type => Customer)
  @JoinColumn()
  private customer: Customer;

  @OneToOne(type => Employee)
  @JoinColumn()
  private employee: Employee;

  @OneToOne(type => Product)
  @JoinColumn()
  private product: Product;

  private updateTotalPrice(): void {
    this.totalPrice = this.unitPrice * this.quantity;
  }

  public set Product(v : Product) {
    this.product = v;
  }

  public get Product() : Product {
    return this.product;
  }

  public set Employee(v : Employee) {
    this.employee = v;
  }

  public get Employee() : Employee {
    return this.employee;
  }

  public set Customer(v : Customer) {
    this.customer = v;
  }

  public get Customer() : Customer {
    return this.customer;
  }

  public set Date(v : Date) {
    this.date = v;
  }

  public get Date() : Date {
    return this.date;
  }

  public set TotalPrice(v : number) {
    this.totalPrice = v;
  }

  public get TotalPrice() : number {
    return this.totalPrice;
  }

  public set Quantity(v: number) {
    this.quantity = v;
    this.updateTotalPrice();
  }

  public get Quantity(): number {
    return this.quantity;
  }

  public set Id(v: number) {
    this.id = v;
  }

  public get Id(): number {
    return this.id;
  }

  public set UnitPrice(v: number) {
    this.unitPrice = v;
    this.updateTotalPrice();
  }

  public get UnitPrice(): number {
    return this.unitPrice;
  }
}

export default Sale;
