export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  picture: FileList;
  country: string;
}

export interface ISubmitForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  picture: string;
  country: string;
}

export type Errors = {
  [key: string]: string;
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: string;
  picture: string;
  country: string;
};

export type FormsList = IFormData[];
