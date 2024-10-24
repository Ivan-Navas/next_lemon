import { Auth } from "./user";

export interface Post {
  id: number,
  date: string,
  data: string,
  image: string,
  author: Auth,
  authorId: number,
  comment: Stat[] ,
  share: Stat[],
  like: Stat[],
  view: Stat[],
}

export interface Stat {
  id: number,
  date: string,
  data?: string,
  file?: string,
  authorId: number,
  postId: number
}
export interface FeedRequest {
  status: string,
  message: string,
  feed: Post[],
}