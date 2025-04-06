import { Component } from '@angular/core';
import { QuizService } from '../question/quiz.service';
import { Category } from '../../assets/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
  imports: [CommonModule],
})
export class CategoryMenuComponent {
  categories = [
    {
      name: 'Менеджемент',
      value: Category.MANAGEMENT,
    },
    {
      name: 'Педиатрия',
      value: Category.PEDIATR,
    },
    {
      name: 'Все',
      value: Category.ALL,
    },
  ];

  constructor(private _quizService: QuizService) {}

  public selectCategory(category: Category) {
    this._quizService.selectCategory(category);
  }
}
