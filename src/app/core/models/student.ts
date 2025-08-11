export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  programId: number;
  enrollmentYear: number;
  contact : {
    phone: string;
    address: string;
  };
  country: string;
  gpa: number;
  review : string;

  image: string;
}
