import { Post } from "./post";

export interface User {
  email: string;
  password: string;
}

export interface Message {
  status: string,
  message: string,
}
interface Follow {
  id: number;
  followerId: number;
  followedId: number;
}
export interface Auth {
  id: number;
  name: string;
  nickName: string;
  email: string;
  image: string;
  bio: string;
  post?: Post[];
  follower?: Follow[];
  following?: Follow[];
}

export interface RegisterUser {
  name: string;
  nickName: string;
  email: string;
  password: string;
  confirm: string;
}
export interface UserExplorer {
  id: number;
  name: string;
  nickName: string;
  email: string;
  image: string;
  bio: string;
}

export interface AuthRequest {
  status: string;
  message: string;
  user: Auth;
}

export interface UserExplorerRequest {
  status: string;
  message: string;
  list: UserExplorer[];
}
