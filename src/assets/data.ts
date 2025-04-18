import { MANAGEMENT_DATA } from './management';
import { MEDICINE_DATA } from './medicine';
import { PEDIATR_DATA } from './pediatr';
import { BIOETHICA_DATA } from './bioethica';
import { SER_DATA } from './set';
import { SURGERY_DATA } from './surgery';
import { IDEOLOGY_DATA } from './ideology';
import { URGENT_DATA } from './urgent';
import { EDUCATION_DATA } from './education';
import { GINECOLOGY_DATA } from './ginecology';

export enum CategoryType {
  GINECOLOGY = 'GINECOLOGY',
  MANAGEMENT = 'MANAGEMENT',
  PEDIATR = 'PEDIATR',
  MEDICINE = 'MEDICINE',
  EDUCATION = 'EDUCATION',
  BIOETHICA = 'BIOETHICA',
  IDEOLOGY = 'IDEOLOGY',
  URGENT = 'URGENT',
  SURGERY = 'SURGERY',
  SER = 'SER',
  ALL = 'ALL',
}

const UNIQUE_DATA = {
  [CategoryType.GINECOLOGY]: GINECOLOGY_DATA,
  [CategoryType.MANAGEMENT]: MANAGEMENT_DATA,
  [CategoryType.PEDIATR]: PEDIATR_DATA,
  [CategoryType.MEDICINE]: MEDICINE_DATA,
  [CategoryType.EDUCATION]: EDUCATION_DATA,
  [CategoryType.BIOETHICA]: BIOETHICA_DATA,
  [CategoryType.IDEOLOGY]: IDEOLOGY_DATA,
  [CategoryType.URGENT]: URGENT_DATA,
  [CategoryType.SURGERY]: SURGERY_DATA,
  [CategoryType.SER]: SER_DATA,
};

const ALL_DATA = Object.values(UNIQUE_DATA).reduce(
  (prev, all) => [...all, ...prev],
  []
);

export const QUIZ_DATA = {
  ...UNIQUE_DATA,
  [CategoryType.ALL]: ALL_DATA,
};
