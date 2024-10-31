import {
  Entity,
  PrimaryColumn,
  BaseEntity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  // ManyToOne,
  // JoinColumn,
} from 'typeorm';
import { LoginType } from './loginType.entity';
import { File } from './file.entity';

@Entity('Users')
export class User extends BaseEntity {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'password', nullable: true })
  password?: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'surname' })
  surname: string;

  @Column({ name: 'photoURL', nullable: true })
  photoURL?: string;

  @Column({ name: 'providerId', nullable: true })
  providerId?: string;

  @Column({ name: 'firstLoginType' })
  firstLoginType: string;

  @ManyToOne(() => LoginType, (type) => type.type)
  @JoinColumn({ name: 'firstLoginType' })
  firstLogin: LoginType;

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

  @OneToMany(() => File, (file) => file.user)
  files: File[];
}
