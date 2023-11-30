import { CreateComunityDto, UpdateComunityDto } from '../dtos';
import { comunityEntity } from '../entities/comunity.entity';



export abstract class comunityDatasource {

  abstract create( createComunityDto: CreateComunityDto ): Promise<comunityEntity>;

  abstract getAll(): Promise<comunityEntity[]>;

  abstract findById( id: number ): Promise<comunityEntity>;
  abstract updateById( updateComunityDto: UpdateComunityDto ): Promise<comunityEntity>;
  abstract deleteById( id: number ): Promise<comunityEntity>;

}