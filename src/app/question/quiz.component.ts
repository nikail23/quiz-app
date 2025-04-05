import { Component, computed, signal } from '@angular/core';
import { QuizService } from './quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [CommonModule],
})
export class QuizComponent {
  public questions = this._quizService.questions;
  public selectedOptions: number[] = [];
  public showAnswers = false;
  public correctAnswersCount = 0;
  public quizCompleted = false;

  private _currentQuestionIndex = signal(0);
  private _prevCorrectAnwersCount = 0;

  constructor(private _quizService: QuizService) {}

  public currentQuestion = computed(
    () => this.questions()[this._currentQuestionIndex()]
  );

  public answerHintText = computed(() =>
    this.currentQuestion().type === 'single'
      ? 'Выберите один правильный ответ'
      : 'Выберете несколько правильных ответов'
  );

  public toggleOption(index: number): void {
    if (this.showAnswers) return;

    if (this.currentQuestion().type === 'single') {
      this.selectedOptions = [index];
    } else {
      const idx = this.selectedOptions.indexOf(index);
      idx === -1
        ? this.selectedOptions.push(index)
        : this.selectedOptions.splice(idx, 1);
    }
  }

  public checkAnswers(): void {
    const correctOptions = this.currentQuestion()
      .options.map((opt, i) => (opt.correct ? i : -1))
      .filter((i) => i !== -1);

    const isCorrect =
      this.selectedOptions.length === correctOptions.length &&
      this.selectedOptions.every((opt) => correctOptions.includes(opt));

    if (isCorrect) this._prevCorrectAnwersCount = this.correctAnswersCount++;

    this.showAnswers = true;
  }

  public goToQuestion(index: number): void {
    this.showAnswers = false;
    this.selectedOptions = [];

    if (index < 0) {
      return;
    }

    if (index < this._currentQuestionIndex()) {
      this.correctAnswersCount = this._prevCorrectAnwersCount;
    }

    if (index < this.questions().length - 1) {
      this._currentQuestionIndex.set(index);
    } else {
      this.quizCompleted = true;
    }
  }

  public next(): void {
    this.goToQuestion(this._currentQuestionIndex() + 1);
  }

  public prev(): void {
    this.goToQuestion(this._currentQuestionIndex() - 1);
    this.correctAnswersCount = this._prevCorrectAnwersCount;
  }

  public isSelected(index: number): boolean {
    return this.selectedOptions.includes(index);
  }

  public hasSelectedOptions(): boolean {
    return this.selectedOptions.length > 0;
  }

  public hasAnswers(): boolean {
    return this.showAnswers;
  }
}
