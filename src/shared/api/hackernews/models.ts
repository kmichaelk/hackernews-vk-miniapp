export interface Item {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  dead?: boolean;
}

export interface Story extends Item {
  type: 'story';
  text?: string;
  kids?: number[];
  url?: string;
  score: number;
  title: string;
  descendants: number;
}

export interface Comment extends Item {
  type: 'comment';
  text: string;
  parent: number;
  kids?: number[];
}

export enum StoriesList {
  New,
  Top,
  // Best,
}
