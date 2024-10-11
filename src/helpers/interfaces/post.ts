import { Auth } from "./user";

export interface Post {
  id: number,
  date: string,
  data: string,
  image: string,
  author: Auth,
  authorId: number,
}

export interface FeedRequest {
  status: string,
  message: string,
  feed: Post[],
}