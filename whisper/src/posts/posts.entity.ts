import { Exclude } from 'class-transformer';
import { User } from '../auth/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../comments/comments.entitry';

@Entity('Posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @ManyToOne((_type) => User, (user) => user.posts, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post, { eager: true })
  comments: Comment[];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
