export interface FinanceRecord {
  id: number;
  studentId: number;
  studentName: string;
  program: string;
  paymentStatus: 'Paid' | 'Unpaid' | 'Partial';
  amountPaid: number;
  totalFees: number;
  dueAmount: number;
  paymentDate: string | null;
  monthlyPayments: number[];
}
