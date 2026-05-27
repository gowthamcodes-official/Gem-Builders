export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'planning' | 'interior';
  location: string;
  area: string; // e.g., "2400 Sq.Ft"
  image: string;
  status: 'Completed' | 'In Progress';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  text: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EstimationResult {
  sqftRate: number;
  totalCost: number;
  breakdown: {
    material: string;
    percentage: number;
    cost: number;
  }[];
}
