export interface Attendance {
  id: number;
  studentId: number;
  studentName: string;
  program: string;
  date: string; // Format: YYYY-MM-DD
  status: 'Present' | 'Absent' | 'Late';
  checkInTime: string | null;  // Format: HH:mm or null
  checkOutTime: string | null; // Format: HH:mm or null
}

