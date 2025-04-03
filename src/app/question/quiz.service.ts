import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { QUIZ_DATA } from '../../assets/data';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private questions = QUIZ_DATA;

  getRandomizedQuestions(): Question[] {
    return [...this.questions]
      .map((q) => ({
        ...q,
        options: this.shuffleArray(q.options),
      }))
      .sort(() => Math.random() - 0.5);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
}
