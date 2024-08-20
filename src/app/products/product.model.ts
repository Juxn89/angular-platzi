import { BaseModel } from "../base.model"
import { Category } from "../cateogories/category.model"

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product extends BaseModel {
  title: string | number
  stock: number
  size: Sizes,
  category: Category
}
