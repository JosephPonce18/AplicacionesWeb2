import { foroEntity } from '../../entities/foro.entity';
import { foroRepository } from '../../repositories/foro.repository';


export interface GetForoUseCase {
  execute( id: number ): Promise<foroEntity>
}


export class GetForo implements GetForoUseCase {
  
  constructor(
    private readonly repository: foroRepository,
  ) {}
  
  execute( id: number ): Promise<foroEntity> {
    return this.repository.findById(id);
  }

}

