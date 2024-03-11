import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.repository.save(createCategoryDto);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const found = await this.repository.findOne({
      where: {
        id,
      },
    });

    if (!found) throw new NotFoundException('Not found!');

    return found;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const found = await this.findOne(id);

    this.repository.update(found.id, updateCategoryDto);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }
}
