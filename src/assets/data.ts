import { Question } from '../app/model/question.model';
import { MANAGEMENT_DATA } from './management';
import { MEDICINE_DATA } from './medicine';
import { PEDIATR_DATA } from './pediatr';
import { SER_DATA } from './set';

export const ALL_DATA: Question[] = [
  ...MANAGEMENT_DATA,
  ...PEDIATR_DATA,
  ...MEDICINE_DATA,
  ...SER_DATA,
];

export enum CategoryType {
  MANAGEMENT = 'MANAGEMENT',
  PEDIATR = 'PEDIATR',
  MEDICINE = 'MEDICINE',
  SER = 'SER',
  ALL = 'ALL',
}

export const QUIZ_DATA = {
  [CategoryType.MANAGEMENT]: MANAGEMENT_DATA,
  [CategoryType.PEDIATR]: PEDIATR_DATA,
  [CategoryType.MEDICINE]: MEDICINE_DATA,
  [CategoryType.SER]: SER_DATA,
  [CategoryType.ALL]: ALL_DATA,
};
