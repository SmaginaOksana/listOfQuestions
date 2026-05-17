import { type ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
  isActive?: boolean;
}

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface IAuthResponse {
  access_token: string;
  user: {
    id: string;
    username: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    birthday: string;
    address: string;
    avatarUrl: string;
    updatedAt: string;
    createdAt: string;
    userRoles: [
      {
        id: number;
        name: string;
        permissions: [
          {
            id: number;
            name: string;
          }
        ];
      }
    ];
    isVerified: boolean;
    isEmailNotificationsEnable: boolean;
  };
}

export interface IAuthParams {
  username: string;
  password: string;
}

export interface IRegisterParams {
  username: string;
  password: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birthday: string;
  address: string;
  avatarUrl: string;
  refId: string;
}
