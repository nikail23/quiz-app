import { Component } from '@angular/core';
import { QuizService } from '../question/quiz.service';
import { CategoryType } from '../../assets/data';
import { CommonModule } from '@angular/common';
import { Category } from '../model/category.model';
import { MANAGEMENT_DATA } from '../../assets/management';
import { PEDIATR_DATA } from '../../assets/pediatr';
import { MEDICINE_DATA } from '../../assets/medicine';
import { SER_DATA } from '../../assets/set';
import { SURGERY_DATA } from '../../assets/surgery';
import { BIOETHICA_DATA } from '../../assets/bioethica';
import { IDEOLOGY_DATA } from '../../assets/ideology';
import { URGENT_DATA } from '../../assets/urgent';
import { EDUCATION_DATA } from '../../assets/education';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
  imports: [CommonModule],
})
export class CategoryMenuComponent {
  categories: Category[] = [
    {
      name: 'Общественное здоровье и здравоохранение',
      value: CategoryType.MANAGEMENT,
      count: MANAGEMENT_DATA.length,
    },
    {
      name: 'Педиатрия',
      value: CategoryType.PEDIATR,
      count: PEDIATR_DATA.length,
    },
    {
      name: 'Пропедевтика внутренних болезней',
      value: CategoryType.MEDICINE,
      count: MEDICINE_DATA.length,
    },
    {
      name: 'Психология и педагогика',
      value: CategoryType.EDUCATION,
      count: EDUCATION_DATA.length,
    },
    {
      name: 'Биоэтика',
      value: CategoryType.BIOETHICA,
      count: BIOETHICA_DATA.length,
    },
    {
      name: 'Идеология, право, антикорупционное законодательство, охрана труда',
      value: CategoryType.IDEOLOGY,
      count: IDEOLOGY_DATA.length,
    },
    {
      name: 'Неотложенная медицинская помощь',
      value: CategoryType.URGENT,
      count: URGENT_DATA.length,
    },
    {
      name: 'Хирургия',
      value: CategoryType.SURGERY,
      count: SURGERY_DATA.length,
    },
    {
      name: 'Санитарно-эпидемиологический режим',
      value: CategoryType.SER,
      count: SER_DATA.length,
    },
    {
      name: 'Все',
      value: CategoryType.ALL,
    },
  ];

  constructor(private _quizService: QuizService) {}

  public selectCategory(category: CategoryType) {
    this._quizService.selectCategory(category);
  }
}
