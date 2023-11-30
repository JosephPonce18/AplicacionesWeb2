import { CreateForoDto, UpdateForoDto } from '../dtos';
import { foroEntity } from '../entities/foro.entity';



export abstract class foroRepository {

    abstract create( createForoDto: CreateForoDto ): Promise<foroEntity>;

    abstract getAll(): Promise<foroEntity[]>;

    abstract findById( id: number ): Promise<foroEntity>;
    abstract updateById( updateTodoDto: UpdateForoDto ): Promise<foroEntity>;
    abstract deleteById( id: number ): Promise<foroEntity>;

}