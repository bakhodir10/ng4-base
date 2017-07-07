import {BaseModel} from '../base/base.model';
export class User extends BaseModel {
  login: string;
  passcode: string;
}
