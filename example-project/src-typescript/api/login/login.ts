import { LoginEntity } from "../../model";

export const isValidLogin = (loginInfo: LoginEntity): boolean => 
  (loginInfo.login === 'admin' && loginInfo.password === 'test');