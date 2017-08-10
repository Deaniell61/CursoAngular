import { Injectable } from '@angular/core'
import { CHARACTERS } from '../mocks/mock-character.mock'
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

import { HistorialCharacter } from '../classes/historicalCharacter'

@Injectable()
export class CharacterService {
    
    //private basePath = 'http://localhost:3008'

    private basePath = require('../global.config');

    


    constructor(private http:Http){

    }

    private handleError(error:any):Promise<any> {
      console.error("ha ocurrido un error")
      console.log(error)
      return Promise.reject(error.message || error)
    }

    // getHistoricalCharacters(){
    //     let url = `${this.basePath}/characters`
    //     return this.http.get(url)
    //                       .map(response => {
    //                         return response.json().data
    //                       })
    // }

    getHistoricalCharacters():Promise<HistorialCharacter[]> {
        let url = `${this.basePath}/characters`
        return this.http.get(url)
                          .toPromise()
                          .then(response => response.json().data as HistorialCharacter[])
                          .catch(this.handleError)
    }

    // getHistoricalCharacters(): Promise<HistorialCharacter[]> {
    //     return Promise.resolve(CHARACTERS)
    // }    

    getHistoricalCharacter(id: number): Promise<HistorialCharacter> {
      let url = `${this.basePath}/character/${id}`
        return this.http.get(url)
                          .toPromise()
                          .then(response => response.json().data as HistorialCharacter)
                          .catch(this.handleError)
      
      // return this.getHistoricalCharacters()
      //           .then(character => character.find(character => character.id === id));
    }
}
