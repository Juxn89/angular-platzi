import { Category } from "../cateogories/category.model"

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product {
  id: string | number
  title: string | number
  createdAt: Date
  stock: number
  size: Sizes,
  category: Category
}