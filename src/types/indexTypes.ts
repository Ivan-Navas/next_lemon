export type ContextType = {
  authMessage: string;
  setAuthMessage: (authMessage: string) => void;
  hidePassword: boolean,
  setHidePassword: (hidePassword: boolean) => void;
  login: (e: any) => void;
};
