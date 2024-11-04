import React from 'react';
import { useStore } from '../store';
import { BarChart2, Database, Activity, Clock } from 'lucide-react';

export function Dashboard() {
  const stats = useStore((state) => state.stats);
  const user = useStore((state) => state.user);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Entries</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalEntries}</p>
            </div>
            <Database className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Space Used</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalSpace} bytes</p>
            </div>
            <BarChart2 className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Server Load</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.serverLoad}%</p>
            </div>
            <Activity className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-500" />
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <div className="space-y-4">
          {stats.recentAccesses.map((access, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  User {access.userId === user?.id ? '(You)' : access.userId}
                </p>
                <p className="text-xs text-gray-500">{access.action}</p>
              </div>
              <p className="text-sm text-gray-500">
                {new Date(access.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}