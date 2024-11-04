export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Entry {
  id: string;
  type: string;
  name: string;
  timestamp: number;
  userId: string;
}

export interface ServerStats {
  totalEntries: number;
  totalSpace: number;
  serverLoad: number;
  recentAccesses: Array<{
    userId: string;
    timestamp: number;
    action: string;
  }>;
}