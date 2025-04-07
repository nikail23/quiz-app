import { CategoryType } from '../../assets/data';

export interface Category {
  name: string;
  value: CategoryType;
  from: number;
  to: number;
}
