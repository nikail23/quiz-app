import { Component } from '@angular/core';
import { QuizService } from '../question/quiz.service';
import { ALL_DATA, CategoryType } from '../../assets/data';
import { CommonModule } from '@angular/common';
import { Category } from '../model/category.model';
import { MANAGEMENT_DATA } from '../../assets/management';
import { PEDIATR_DATA } from '../../assets/pediatr';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
  imports: [CommonModule],
})
export class CategoryMenuComponent {
  categories: Category[] = [
    {
      name: 'Менеджемент',
      value: CategoryType.MANAGEMENT,
      from: MANAGEMENT_DATA[0].id,
      to: MANAGEMENT_DATA[MANAGEMENT_DATA.length - 1].id,
    },
    {
      name: 'Педиатрия',
      value: CategoryType.PEDIATR,
      from: PEDIATR_DATA[0].id,
      to: PEDIATR_DATA[PEDIATR_DATA.length - 1].id,
    },
    {
      name: 'Все',
      value: CategoryType.ALL,
      from: ALL_DATA[0].id,
      to: ALL_DATA[ALL_DATA.length - 1].id,
    },
  ];

  constructor(private _quizService: QuizService) {}

  public selectCategory(category: CategoryType) {
    this._quizService.selectCategory(category);
  }
}
