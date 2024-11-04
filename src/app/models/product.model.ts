export interface Product {
  id: number,
  title: string,
  price: number,
  images: string[],
  description: string,
  category: Category
}

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface Category {
  id: number,
  name: string,
}