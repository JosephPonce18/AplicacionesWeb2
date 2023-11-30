import { prisma } from '../../data/postgres';
import { CreateForoDto, foroEntity, UpdateForoDto } from '../../domain';




export class foroDatasourceImpl implements foroDatasourceImpl {

    async create( createForoDto: CreateForoDto ): Promise<foroEntity> {
        const { date_update, ...rest } =  createForoDto
        const foro = await prisma.foro.create({
        data: rest
        });

        return foroEntity.fromObject( foro );
    }

    async getAll(): Promise<foroEntity[]> {
        const foros = await prisma.foro.findMany();
        return foros.map( (foro: { [key: string]: any; }) => foroEntity.fromObject(foro) );
    }

    async findById( id: number ): Promise<foroEntity> {
        const foro = await prisma.foro.findFirst({
        where: { id }
        });

        if ( !foro) throw `foro with id ${ id } not found`;
        return foroEntity.fromObject(foro);
    }

    async updateById( updateForoDto: UpdateForoDto ): Promise<foroEntity> {
        await this.findById( updateForoDto.id );
        
        const updatedForo = await prisma.foro.update({
        where: { id: updateForoDto.id },
        data: updateForoDto!.values
        });

        return foroEntity.fromObject(updatedForo);
    }

    async deleteById( id: number ): Promise<foroEntity> {
        await this.findById( id );
        const deleted = await prisma.foro.delete({
        where: { id }
        });

        return foroEntity.fromObject( deleted );
    }

}