import { ICategory } from 'app/shared/model/category.model';

export interface IProduct {
  id?: number;
  productName?: string;
  category?: ICategory;
}

export const defaultValue: Readonly<IProduct> = {};
