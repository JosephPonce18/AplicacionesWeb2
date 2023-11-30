import { foroEntity } from '../../entities/foro.entity';
import { foroRepository } from '../../repositories/foro.repository';


export interface DeleteForoUseCase {
  execute( id: number ): Promise<foroEntity>
}

export class DeleteForo implements DeleteForoUseCase {
  
  constructor(
    private readonly repository: foroRepository,
  ) {}
  
  execute( id: number ): Promise<foroEntity> {
    return this.repository.deleteById(id);
  }

}

