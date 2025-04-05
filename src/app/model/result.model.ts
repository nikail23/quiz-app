import { Question } from './question.model';

export interface Result {
  question: Question;
  selectedOptions: number[];
  isCorrect: boolean;
}
