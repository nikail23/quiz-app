import { Question } from '../app/model/question.model';
import { MANAGEMENT_DATA } from './management';
import { PEDIATR_DATA } from './pediatr';

export const ALL_DATA: Question[] = [...MANAGEMENT_DATA, ...PEDIATR_DATA];

export enum CategoryType {
  MANAGEMENT = 'MANAGEMENT',
  PEDIATR = 'PEDIATR',
  ALL = 'ALL',
}

export const QUIZ_DATA = {
  [CategoryType.MANAGEMENT]: MANAGEMENT_DATA,
  [CategoryType.PEDIATR]: PEDIATR_DATA,
  [CategoryType.ALL]: ALL_DATA,
};
