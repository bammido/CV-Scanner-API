import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { File } from './file.entity';

@Entity('CVResumes')
export class CVResume extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;

  @Column({ name: 'fileId' })
  fileId: string;

  @Column({ name: 'result', type: 'json' })
  result: JSON;

  @Column({ name: 'totalScore', type: 'int4' })
  totalScore: number;

  @ManyToOne(() => File, (file) => file.id)
  @JoinColumn({ name: 'fileId' })
  file: File;
}
