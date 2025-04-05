import { Component, computed } from '@angular/core';
import { QuizComponent } from './question/quiz.component';
import { CategoryMenuComponent } from './category/category-menu.component';
import { QuizService } from './question/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, QuizComponent, CategoryMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public showCategoryMenu = computed(
    () => this._quizService.questions().length === 0
  );

  constructor(private _quizService: QuizService) {}

  public unsetCategory(): void {
    this._quizService.selectCategory(null);
  }
}
