export class User {
  constructor(
      public email: string = '',
      public fullname: string = '',
      public dateOfBirth: string = '',
      public dummyAccount: string = '',
      public location: string = '',
      public country: string = '',
      public pincode: number = 0
  ) {}
}
