import { create } from 'zustand';
import { User, Entry, ServerStats } from './types';

interface AppState {
  user: User | null;
  entries: Entry[];
  stats: ServerStats;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  logout: () => void;
  addEntry: (type: string, name: string) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  entries: [],
  stats: {
    totalEntries: 0,
    totalSpace: 0,
    serverLoad: 0,
    recentAccesses: [],
  },
  login: (email, password) => {
    // Simulate API call
    set({
      user: {
        id: '1',
        email,
        name: email.split('@')[0],
      },
    });
  },
  register: (email, password, name) => {
    // Simulate API call
    set({
      user: {
        id: '1',
        email,
        name,
      },
    });
  },
  logout: () => set({ user: null }),
  addEntry: (type, name) =>
    set((state) => {
      const newEntry = {
        id: Math.random().toString(36).substring(7),
        type,
        name,
        timestamp: Date.now(),
        userId: state.user?.id || '',
      };
      const newAccess = {
        userId: state.user?.id || '',
        timestamp: Date.now(),
        action: 'add_entry',
      };
      return {
        entries: [...state.entries, newEntry],
        stats: {
          ...state.stats,
          totalEntries: state.stats.totalEntries + 1,
          totalSpace: state.stats.totalSpace + name.length,
          recentAccesses: [newAccess, ...state.stats.recentAccesses].slice(0, 5),
        },
      };
    }),
}));