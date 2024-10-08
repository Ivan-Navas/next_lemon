import { Post } from "./post";

export interface User {
  email: string,
  password: string,
}

interface Follow {
  id: number,
  followerId: number,
  followedId: number,
}
export interface Auth {
  id: number,
  name: string,
  nickName: string,
  email: string,
  image: string,
  bio: string,
  post?: Post[],
  follower?: Follow[],
  following?: Follow[],
}

export interface AuthRequest {
  status: string,
  message: string,
  user: Auth,
}