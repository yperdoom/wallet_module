export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public fixed_salary: number,
    public total_balance: number,
    public salary_payment_date: Date
  ) { }
}
