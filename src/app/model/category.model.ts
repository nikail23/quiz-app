import { CategoryType } from '../../assets/data';

export interface Category {
  name: string;
  value: CategoryType;
  count?: number;
}
