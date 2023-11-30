import { UpdateForoDto } from '../../dtos';
import { foroEntity } from '../../entities/foro.entity';
import { foroRepository } from '../../repositories/foro.repository';


export interface UpdateForoUseCase {
  execute( dto: UpdateForoDto ): Promise<foroEntity>
}


export class UpdateForo implements UpdateForoUseCase {
  
  constructor(
    private readonly repository: foroRepository,
  ) {}
  
  execute( dto: UpdateForoDto ): Promise<foroEntity> {
    return this.repository.updateById(dto);
  }

}

