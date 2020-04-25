import { IProduct } from 'app/shared/model/product.model';

export interface ICategory {
  id?: number;
  name?: string;
  products?: IProduct[];
}

export const defaultValue: Readonly<ICategory> = {};
