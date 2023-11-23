import { comunityEntity } from "./comunity.entity";


export class foroEntity {
    private constructor(
        public  subject: string | null,
        public  description: string,
        public  date_publication: Date | null,
        public  date_update: Date | null,
        public  comunityId?: comunityEntity[],
    ) {}
    get foros() {
        return this.comunityId;
    }
    
    public static fromObject( object: {[key: string]: any} ): comunityEntity {
        const { subject, description, date_publication, date_update} = object;
        if ( !subject ) throw 'Id is required';
        if ( !description ) throw 'code is required';
        if ( !date_publication ) throw 'address is required';
        if ( !date_update ) throw 'phone is required';
    
        return new comunityEntity(subject, description, date_publication, date_update)
    }
    
    }