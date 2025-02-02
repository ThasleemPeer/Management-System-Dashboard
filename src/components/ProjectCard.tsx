import React from 'react';
import { Project } from '../types';
import { Calendar, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColor = {
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800',
    'On Hold': 'bg-yellow-100 text-yellow-800',
  }[project.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
          {project.status}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {new Date(project.startDate).toLocaleDateString()} - 
            {new Date(project.endDate).toLocaleDateString()}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">
              Budget: ${project.budget.toLocaleString()}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            Spent: ${project.spent.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};