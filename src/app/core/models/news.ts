export interface NewsItem {
  id: number;
  title: string;
  date: string; // ISO format: 'YYYY-MM-DD'
  content: string;
  images: string[];
  category: string;
  excerpt?: string; // Optional field for a short summary
  author?: string; // Optional field for the author's name
}
