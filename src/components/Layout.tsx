import React from 'react';
import { useStore } from '../store';
import { LogOut, LayoutDashboard, PlusCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: 'dashboard' | 'add-entry';
  onPageChange: (page: 'dashboard' | 'add-entry') => void;
}

export function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const { user, logout } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Database className="w-8 h-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">DataDash</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => onPageChange('dashboard')}
                  className={`${
                    currentPage === 'dashboard'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </button>
                <button
                  onClick={() => onPageChange('add-entry')}
                  className={`${
                    currentPage === 'add-entry'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Entry
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 mr-4">Welcome, {user?.name}</span>
              <button
                onClick={logout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}