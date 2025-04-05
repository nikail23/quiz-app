import { computed, Injectable, signal } from '@angular/core';
import { Question } from '../model/question.model';
import { Category, QUIZ_DATA } from '../../assets/data';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private _questions = QUIZ_DATA;
  private _selectedCategory = signal<Category | null>(null);

  public questions = computed(() => this._getRandomizedQuestions());

  public selectCategory(category: Category | null): void {
    this._selectedCategory.set(category);
  }

  private _getRandomizedQuestions(): Question[] {
    const selectCategory = this._selectedCategory();
    return selectCategory
      ? [...this._questions[selectCategory]]
          .map((q) => ({
            ...q,
            options: this._shuffleArray(q.options),
          }))
          .sort(() => Math.random() - 0.5)
      : [];
  }

  private _shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
}
