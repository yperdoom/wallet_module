export class Card {
  constructor(
    public id: number,
    public account_id: number,
    public cost: number,
    public due_date: Date,
    public closing_date: Date
  ) { }
}
