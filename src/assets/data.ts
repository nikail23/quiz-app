import { MANAGEMENT_DATA } from './management';
import { MEDICINE_DATA } from './medicine';
import { PEDIATR_DATA } from './pediatr';
import { BIOETHICA_DATA } from './bioethica';
import { SER_DATA } from './set';
import { SURGERY_DATA } from './surgery';

export enum CategoryType {
  MANAGEMENT = 'MANAGEMENT',
  PEDIATR = 'PEDIATR',
  MEDICINE = 'MEDICINE',
  BIOETHICA = 'BIOETHICA',
  SURGERY = 'SURGERY',
  SER = 'SER',
  ALL = 'ALL',
}

const UNIQUE_DATA = {
  [CategoryType.MANAGEMENT]: MANAGEMENT_DATA,
  [CategoryType.PEDIATR]: PEDIATR_DATA,
  [CategoryType.MEDICINE]: MEDICINE_DATA,
  [CategoryType.BIOETHICA]: BIOETHICA_DATA,
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
