import { Post } from "./post";

export interface User {
  email: string,
  password: string,
}

export interface Auth {
  id: number,
  name: string,
  nickName: string,
  email: string,
  post: Post[],
}

export interface AuthRequest {
  status: string,
  message: string,
  user: Auth,
}