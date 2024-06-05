export interface IRegisterData {
  name: string;
  password: string;
  email: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IApiResponse {
  message?: Array<string>;
  error?: string;
  statusCode?: number;
}

export interface IRegisterResponse extends IApiResponse {
  access_token?: string;
}

export interface ILoginResponse extends IApiResponse {
  access_token?: string;
}
