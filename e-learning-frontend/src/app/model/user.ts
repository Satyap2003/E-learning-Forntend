export class User {
  constructor(
      public email: string = '',
      public username: string = '',
      public password: string = 'password',
      public dateOfBirth: string = '',
      public dummyAccount: string = '',
      public location: string = '',
      public country: string = '',
      public pincode: number = 0
  ) {}
}
