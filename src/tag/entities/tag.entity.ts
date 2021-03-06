import { Novel } from 'src/novel/entities/novel.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  name: string;

  @Column({ nullable: true})
  description: string;

  @ManyToMany(() => Novel, (novel) => novel.tags)
  @JoinTable()
  novels: Novel[];

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;
  
  @Column({ nullable: true, unique: true })
  uniqueName: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
