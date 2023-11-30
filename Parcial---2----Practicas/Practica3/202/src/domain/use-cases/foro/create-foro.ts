import { CreateForoDto } from '../../dtos';
import { foroEntity } from '../../entities/foro.entity';
import { foroRepository } from '../../repositories/foro.repository';


export interface CreateForoUseCase {
  execute( dto: CreateForoDto ): Promise<foroEntity>
}

// ctrl+ shift + l
export class CreateForo implements CreateForoUseCase {
  
  constructor(
    private readonly repository: foroRepository,
  ) {}
  
  execute( dto: CreateForoDto ): Promise<foroEntity> {
    return this.repository.create(dto);
  }

}

