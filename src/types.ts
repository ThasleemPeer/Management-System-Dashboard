export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  progress: number;
  budget: number;
  spent: number;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  deadline: string;
  status: 'Todo' | 'In Progress' | 'Completed';
}

export interface SalesData {
  month: string;
  amount: number;
}