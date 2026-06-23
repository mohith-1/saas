export interface Companion {
  id: string;
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
  author?: string;
  created_at?: string;
}

export interface CreateCompanionParams {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

export interface GetAllCompanionsParams {
  limit?: number;
  page?: number;
  subject?: string;
  topic?: string;
}

export interface SavedMessage {
  role: 'user' | 'assistant';
  content: string;
}