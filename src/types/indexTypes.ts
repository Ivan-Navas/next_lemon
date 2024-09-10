export type ContextType = {
  authMessage: string;
  setAuthMessage: (authMessage: string) => void;
  hidePassword: boolean,
  setHidePassword: (hidePassword: boolean) => void;
  theme: string,
  setTheme: (theme: string) => void;
  handleChangeTheme: () => void;
  login: (e: any) => void;
};
