export interface RegisterUserDto {
  fullName: string;
  gender: "male" | "female";
  identification: string;
  email: string;
  password: string;
  latitude: number;
  longitude: number;
}
