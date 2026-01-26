import { Card } from '../entities/card.entity';

export interface CardRepositoryPort {
  create(card: Card): Promise<Card>;
  findAll(): Promise<Card[]>;
  findById(id: number): Promise<Card | null>;
  update(id: number, card: Partial<Card>): Promise<Card | null>;
  delete(id: number): Promise<void>;
}
