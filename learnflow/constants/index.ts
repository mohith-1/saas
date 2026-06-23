export const SUBJECTS = [
  'Frontend', 'Backend', 'DevOps', 'AI/ML', 'Security', 'Database'
] as const;

export type Subject = typeof SUBJECTS[number];

export const SUBJECT_COLORS: Record<string, string> = {
  Frontend:  '#3b82f6',
  Backend:   '#8b5cf6',
  DevOps:    '#10b981',
  'AI/ML':   '#f59e0b',
  Security:  '#ef4444',
  Database:  '#06b6d4',
};

export const SUBJECT_EMOJIS: Record<string, string> = {
  Frontend:  '⚛️',
  Backend:   '🟢',
  DevOps:    '🐳',
  'AI/ML':   '🧠',
  Security:  '🔐',
  Database:  '🗄️',
};

export const VOICES = ['male', 'female'] as const;
export const STYLES = ['casual', 'formal'] as const;

// Dummy data — replace with real DB data from Day 3
export const DUMMY_COMPANIONS = [
  {
    id: '1',
    name: 'Nova the React Wizard',
    subject: 'Frontend',
    topic: 'React hooks — useState, useEffect, custom hooks & performance',
    voice: 'female',
    style: 'casual',
    duration: 20,
  },
  {
    id: '2',
    name: 'Kai the Node Architect',
    subject: 'Backend',
    topic: 'Node.js + Express APIs, middleware, auth, REST best practices',
    voice: 'male',
    style: 'formal',
    duration: 30,
  },
  {
    id: '3',
    name: 'Sage the DevOps Guru',
    subject: 'DevOps',
    topic: 'Docker, Kubernetes, CI/CD pipelines, cloud deployments',
    voice: 'female',
    style: 'casual',
    duration: 25,
  },
];