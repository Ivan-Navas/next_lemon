import { Post } from "@/helpers/interfaces/post";
import { Auth, Message, UserExplorer } from "@/helpers/interfaces/user";

export type ContextType = {
  authMessage: string;
  setAuthMessage: (authMessage: string) => void;
  registerMessage: Message;
  setRegisterMessage: (registerMessage: Message) => void;
  hidePassword: boolean;
  setHidePassword: (hidePassword: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  handleChangeTheme: () => void;
  login: (e: any) => void;
  register: (e: any) => void;
  auth: Auth;
  handleInputChange: (e: any) => void;
  handleInputRegisterChange: (e: any) => void;
  getFeed: () => void;
  userExplorer: UserExplorer[];
  setUserExplorer: (userExplore: UserExplorer[]) => void;
  feed: Post[];
  setFeed: (post: Post[]) => void;
  formatDate: (date: Date) => string;
  modalState: boolean;
  setModalState: (modalState: boolean) => void;
  getUserInfo: (id: number) => void;
  userInfo: Auth;
  setUserInfo: (userInfo: Auth) => void;
  logOut: () => void;
  likeFun: (postId: number, id: number) => void
};
