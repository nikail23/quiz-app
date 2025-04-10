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
      name: 'Пропедевтика внутренних болезней',
      value: CategoryType.MEDICINE,
      from: MEDICINE_DATA[0].id,
      to: MEDICINE_DATA[MEDICINE_DATA.length - 1].id,
    },
    {
      name: 'Биоэтика',
      value: CategoryType.BIOETHICA,
      from: BIOETHICA_DATA[0].id,
      to: BIOETHICA_DATA[BIOETHICA_DATA.length - 1].id,
    },
    {
      name: 'Хирургия',
      value: CategoryType.SURGERY,
      from: SURGERY_DATA[0].id,
      to: SURGERY_DATA[SURGERY_DATA.length - 1].id,
    },
    {
      name: 'Санитарно-эпидемиологический режим',
      value: CategoryType.SER,
      from: SER_DATA[0].id,
      to: SER_DATA[SER_DATA.length - 1].id,
    },
    {
      name: 'Идеология, право, антикорупционное законодательство, охрана труда',
      value: CategoryType.IDEOLOGY,
      from: IDEOLOGY_DATA[0].id,
      to: IDEOLOGY_DATA[IDEOLOGY_DATA.length - 1].id,
    },
    {
      name: 'Неотложенная медицинская помощь',
      value: CategoryType.URGENT,
      from: URGENT_DATA[0].id,
      to: URGENT_DATA[URGENT_DATA.length - 1].id,
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
