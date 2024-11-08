import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cartao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('int')
  ultimos_digitos: number;

  @Column('varchar')
  banco: string;

  @Column('boolean')
  virtual: boolean;

  @Column('boolean')
  ativa: boolean;
}
