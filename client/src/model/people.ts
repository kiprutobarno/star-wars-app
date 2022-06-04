import { Result } from './result';

export interface People {
  count: number;
  next: string;
  previous: string;
  results: Result;
}
