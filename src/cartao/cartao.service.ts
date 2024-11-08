import { Inject, Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { CARTAO_REPOSITORY } from '../../constants';
import { Repository } from 'typeorm';
import { Cartao } from './entities/cartao.entity';

@Injectable()
export class CartaoService {
  constructor(
    @Inject(CARTAO_REPOSITORY)
    private readonly cartaoRepository: Repository<Cartao>,
  ) {}

  async create(createCartaoDto: CreateCartaoDto) {
    return 'This action adds a new cartao';
  }

  async findAll() {
    return this.cartaoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cartao`;
  }

  update(id: number, updateCartaoDto: UpdateCartaoDto) {
    return `This action updates a #${id} cartao`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartao`;
  }
}
