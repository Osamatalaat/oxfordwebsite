export interface Account {
  email: string;
  password: string;
  role: 'student' | 'admin'; // Add role to differentiate between user types
}

