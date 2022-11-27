export interface UserModel {
  email: string;
  username: string;
  password: string;
  name: NameModel;
  address: AddressModel;
  phone: string;
}

export interface UserModelDTO {
  email: string;
  username: string;
  password: string;
  phone: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface NameModel {
  firstname: string;
  lastname: string;
}

export interface AddressModel {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: GeolocationModel;
}

export interface GeolocationModel {
  lat: string;
  long: string;
}
