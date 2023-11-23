import { prisma } from '../../data/postgres';
import { CreateComunityDto, comunityEntity, UpdateComunityDto } from '../../domain';




export class comunityDatasourceImpl implements comunityDatasourceImpl {

    async create( createComunityDto: CreateComunityDto ): Promise<comunityEntity> {
        const { userId, ...rest } =  createComunityDto
        const comunity = await prisma.comunity.create({
        data: rest
        });

        return comunityEntity.fromObject( comunity );
    }

    async getAll(): Promise<comunityEntity[]> {
        const comunities = await prisma.comunities.findMany();
        return comunities.map( (comunity: { [key: string]: any; }) => comunityEntity.fromObject(comunity) );
    }

    async findById( id: number ): Promise<comunityEntity> {
        const comunity = await prisma.comunity.findFirst({
        where: { id }
        });

        if ( !comunity) throw `comunity with id ${ id } not found`;
        return comunityEntity.fromObject(comunity);
    }

    async updateById( updateComunityDto: UpdateComunityDto ): Promise<comunityEntity> {
        await this.findById( updateComunityDto.id );
        
        const updatedComunity = await prisma.comunity.update({
        where: { id: updateComunityDto.id },
        data: updateComunityDto!.values
        });

        return comunityEntity.fromObject(updatedComunity);
    }

    async deleteById( id: number ): Promise<comunityEntity> {
        await this.findById( id );
        const deleted = await prisma.comunity.delete({
        where: { id }
        });

        return comunityEntity.fromObject( deleted );
    }

}