import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CharactersService {
    // funcion para consumir la API 
    async getHumans() {

        const response = await axios.get(
          'https://rickandmortyapi.com/api/character'
        ) 
        const characters = response.data.results  
        const humans = characters.filter(
          (character) => character.species === 'Human'
        )   
        return humans.map((character) => ({
            id: character.id,
            name: character.name,
            image: character.image,
            status: character.status,
            origin: character.origin.name
          }))
      }
    //funcion para consumir la API 

}
