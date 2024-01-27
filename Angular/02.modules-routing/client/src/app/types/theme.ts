import { Post } from './posts';
import { UserId } from './user-id';

export interface Theme {
  subscribers: UserId[];
  posts: Post[];
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}
