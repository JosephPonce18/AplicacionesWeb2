// DDD
import { Request, Response } from 'express';
import { CreateForoDto, UpdateForoDto } from '../../domain/dtos';
import { foroRepository } from '../../domain/repositories/foro.repository';


export class forosController {

  //* DI
  constructor(
    private readonly foroRepository: foroRepository,
  ) { }


  public getForos = async ( req: Request, res: Response ) => {
    const foros = await this.foroRepository.getAll();
    return res.json( foros );
  };

  public getForoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const foro = await this.foroRepository.findById( id );
      res.json( foro );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createforo = async ( req: Request, res: Response ) => {
    const [ error, createForoDto ] = CreateForoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const foro = await this.foroRepository.create( createForoDto! );
    res.json( foro );

  };

  public updateForo = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateForoDto ] = UpdateForoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedForo = await this.foroRepository.updateById( updateForoDto! );
    return res.json( updatedForo );

  };


  public deleteCustomer = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedForo = await this.foroRepository.deleteById( id );
    res.json( deletedForo );

  };
}