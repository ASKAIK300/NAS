import React, { useState } from 'react';
import { useStore } from './store';
import { Auth } from './components/Auth';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { AddEntry } from './components/AddEntry';

function App() {
  const user = useStore((state) => state.user);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'add-entry'>('dashboard');

  if (!user) {
    return <Auth />;
  }

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentPage === 'dashboard' ? <Dashboard /> : <AddEntry />}
    </Layout>
  );
}

export default App;