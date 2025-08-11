export interface Notice {
  id: number;
  title: string;
  message: string;
  date: string; // or Date if you want to convert it
  priority: 'Low' | 'Medium' | 'High';
  type: 'System' | 'Academic' | 'Finance' | 'General' | 'Career';
  status: 'Read' | 'Unread';
}
