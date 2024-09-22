export interface AuthState {
  isLogin: boolean;
  authInfo: {
    id: string;
    username: string;
    email: string;
  };
}

export interface LoginParams {
  username: string;
  password: string;
}
