import React from 'react';
import { Task } from '../types';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'In Progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'Todo':
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Tasks</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start space-x-4 p-4 border rounded-lg"
            >
              {getStatusIcon(task.status)}
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{task.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm font-medium ${
                  task.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : task.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};