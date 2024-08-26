import axios from 'axios';
import { Product } from '../models/product.model';
import { ProductService } from '../models/product-service.model';
import { CreateProductDto, UpdateProdctDto } from '../dto/product.dto';

export class ProductHttpService implements ProductService {
  private readonly API_ESCUELAJS_URL = 'https://api.escuelajs.co/api/v1/products'

  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post(this.API_ESCUELAJS_URL, dto)
    return data
  }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get(`${this.API_ESCUELAJS_URL}/${id}`)
    return data
  }

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.API_ESCUELAJS_URL)
    return data
  }

  async update(id: Product['id'], changes: UpdateProdctDto): Promise<Product> {
    const { data } = await axios.patch(`${this.API_ESCUELAJS_URL}/${id}`, changes)
    return data
  }

}