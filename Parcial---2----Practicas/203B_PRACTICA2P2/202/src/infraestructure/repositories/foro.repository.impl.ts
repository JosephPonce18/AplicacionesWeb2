import { CreateForoDto, foroDatasource, foroEntity, foroRepository, UpdateForoDto } from '../../domain';


export class foroRepositoryImpl implements foroRepository {

  constructor(
    private readonly datasource: foroDatasource,
  ) { }


  create( createCustomerDto: CreateForoDto ): Promise<foroEntity> {
    return this.datasource.create( createCustomerDto );
  }

  getAll(): Promise<foroEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<foroEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCustomerDto: UpdateForoDto ): Promise<foroEntity> {
    return this.datasource.updateById( updateCustomerDto );
  }

  deleteById( id: number ): Promise<foroEntity> {
    return this.datasource.deleteById( id );
  }

}


