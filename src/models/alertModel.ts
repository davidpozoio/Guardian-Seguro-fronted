export interface AlertType {
  name: string;
  url: string;
  description: string;
}

export interface AlertPostDto {
  type: string;
  details: string;
  latitude: number;
  longitude: number;
}

export interface UserAlert {
  fullName: string;
  gender: string;
}

export interface AlertGetDto extends AlertPostDto {
  id: number;
  user: UserAlert;
}
