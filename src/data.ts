import { Project, Task, SalesData } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    status: 'In Progress',
    progress: 65,
    budget: 50000,
    spent: 32000,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    startDate: '2024-02-01',
    endDate: '2024-06-30',
    status: 'In Progress',
    progress: 25,
    budget: 80000,
    spent: 15000,
  },
  {
    id: '3',
    name: 'Marketing Campaign',
    startDate: '2024-01-15',
    endDate: '2024-02-28',
    status: 'Completed',
    progress: 100,
    budget: 25000,
    spent: 24500,
  },
];

export const tasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    name: 'Design System',
    description: 'Create a comprehensive design system for the website',
    deadline: '2024-02-15',
    status: 'Completed',
  },
  {
    id: '2',
    projectId: '1',
    name: 'Frontend Development',
    description: 'Implement the new design using React',
    deadline: '2024-03-15',
    status: 'In Progress',
  },
  {
    id: '3',
    projectId: '2',
    name: 'API Integration',
    description: 'Integrate backend APIs with the mobile app',
    deadline: '2024-04-01',
    status: 'Todo',
  },
];

export const salesData: SalesData[] = [
  { month: 'Jan', amount: 45000 },
  { month: 'Feb', amount: 52000 },
  { month: 'Mar', amount: 48000 },
  { month: 'Apr', amount: 61000 },
  { month: 'May', amount: 55000 },
  { month: 'Jun', amount: 67000 },
];