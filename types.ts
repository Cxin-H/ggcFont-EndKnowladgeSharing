export enum ViewState {
  HOME = 'HOME',
  KNOWLEDGE = 'KNOWLEDGE',
  REACT_ZONE = 'REACT_ZONE',
  GUESTBOOK = 'GUESTBOOK'
}

export interface Article {
  id: string;
  title: string;
  category: 'JS' | 'CSS' | 'Architecture' | 'React';
  summary: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: number;
  avatarSeed: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}