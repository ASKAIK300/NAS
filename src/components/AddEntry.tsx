import React, { useState } from 'react';
import { useStore } from '../store';
import { PlusCircle } from 'lucide-react';

export function AddEntry() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const addEntry = useStore((state) => state.addEntry);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEntry(type, name);
    setType('');
    setName('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <PlusCircle className="w-6 h-6 text-blue-500" />
        Add New Entry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Data Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
}