import { Post } from './posts';
import { UserId } from './user-id';

export interface Themes {
  subscribers: string;
  posts: string;
  _id: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: number;
}
