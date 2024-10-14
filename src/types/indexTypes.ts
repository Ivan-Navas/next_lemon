import { Post } from "@/helpers/interfaces/post";
import { Auth, UserExplorer } from "@/helpers/interfaces/user";

export type ContextType = {
  authMessage: string;
  setAuthMessage: (authMessage: string) => void;
  hidePassword: boolean,
  setHidePassword: (hidePassword: boolean) => void;
  theme: string,
  setTheme: (theme: string) => void;
  handleChangeTheme: () => void;
  login: (e: any) => void;
  auth: Auth
  handleInputChange: (e: any)=> void;
  getFeed: ()=> void;
  userExplorer: UserExplorer[];
  setUserExplorer: (userExplore: UserExplorer[]) => void,
  feed: Post[];
  setFeed: (post: Post[])=> void;
  formatDate: (date: Date) => string;
};
