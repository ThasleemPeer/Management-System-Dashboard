import React from 'react';
import { ProjectCard } from './components/ProjectCard';
import { TaskList } from './components/TaskList';
import { SalesChart } from './components/SalesChart';
import { projects, tasks, salesData } from './data';
import { LayoutDashboard, Users, Briefcase, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex items-center h-16 px-6 border-b">
          <LayoutDashboard className="w-6 h-6 text-blue-600" />
          <span className="ml-3 text-lg font-semibold">NexusLogic</span>
        </div>
        <nav className="p-4">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Users, label: 'Team' },
            { icon: Briefcase, label: 'Projects' },
            { icon: Settings, label: 'Settings' },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-full px-8">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TaskList tasks={tasks} />
            <SalesChart data={salesData} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;