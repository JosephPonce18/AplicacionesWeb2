import { foroEntity } from '../../entities/foro.entity';
import { foroRepository } from '../../repositories/foro.repository';


export interface GetForosUseCase {
  execute(): Promise<foroEntity[]>
}


export class GetForos implements GetForosUseCase {
  
  constructor(
    private readonly repository: foroRepository,
  ) {}
  
  execute(): Promise<foroEntity[]> {
    return this.repository.getAll();
  }

}

