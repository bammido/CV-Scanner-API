import { Entity, PrimaryColumn, BaseEntity, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('LoginTypes')
export class LoginType extends BaseEntity {
  @PrimaryColumn({ name: 'type' })
  type: string;

  @OneToMany(() => User, (user) => user.firstLogin)
  users: User[];
}
