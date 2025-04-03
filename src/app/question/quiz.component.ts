import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question } from './question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  imports: [CommonModule],
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedOptions: number[] = [];
  showAnswers = false;
  correctAnswersCount = 0;
  quizCompleted = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getRandomizedQuestions();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  getAnswerHintText(): string {
    return this.currentQuestion.type === 'single'
      ? 'Выберите один правильный ответ'
      : 'Выберете несколько правильных ответов';
  }

  toggleOption(index: number): void {
    if (this.showAnswers) return;

    if (this.currentQuestion.type === 'single') {
      this.selectedOptions = [index];
    } else {
      const idx = this.selectedOptions.indexOf(index);
      idx === -1
        ? this.selectedOptions.push(index)
        : this.selectedOptions.splice(idx, 1);
    }
  }

  handleButtonClick(): void {
    if (!this.showAnswers) {
      // Проверяем ответ
      const correctOptions = this.currentQuestion.options
        .map((opt, i) => (opt.correct ? i : -1))
        .filter((i) => i !== -1);

      const isCorrect =
        this.selectedOptions.length === correctOptions.length &&
        this.selectedOptions.every((opt) => correctOptions.includes(opt));

      if (isCorrect) this.correctAnswersCount++;

      this.showAnswers = true;
    } else {
      // Переходим к следующему вопросу
      this.showAnswers = false;
      this.selectedOptions = [];

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.quizCompleted = true;
      }
    }
  }

  isSelected(index: number): boolean {
    return this.selectedOptions.includes(index);
  }

  hasSelectedOptions(): boolean {
    return this.selectedOptions.length > 0;
  }
}
