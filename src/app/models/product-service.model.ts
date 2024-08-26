import { CreateProductDto, UpdateProdctDto } from "../dto/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  create(dto: CreateProductDto): Product | Promise<Product>
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>
  getAll(): Product[] | Promise<Product[]>
  update(id: Product['id'], changes: UpdateProdctDto): Product | Promise<Product>
}