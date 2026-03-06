import { Controller, Get } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
    //CCreacion de Endpoint
    constructor(private readonly charactersService: CharactersService){}
    @Get('humans')
    getHumans(){
        return this.charactersService.getHumans()
    }
    //Creacion de Endpoint
}
