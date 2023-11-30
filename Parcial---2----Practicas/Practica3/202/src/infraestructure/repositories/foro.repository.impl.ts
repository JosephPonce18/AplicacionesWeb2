import { CreateForoDto, foroDatasource, foroEntity, foroRepository, UpdateForoDto } from '../../domain';


export class foroRepositoryImpl implements foroRepository {

  constructor(
    private readonly datasource: foroDatasource,
  ) { }


  create( createForoDto: CreateForoDto ): Promise<foroEntity> {
    return this.datasource.create( createForoDto );
  }

  getAll(): Promise<foroEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<foroEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateForoDto: UpdateForoDto ): Promise<foroEntity> {
    return this.datasource.updateById( updateForoDto );
  }

  deleteById( id: number ): Promise<foroEntity> {
    return this.datasource.deleteById( id );
  }

}


