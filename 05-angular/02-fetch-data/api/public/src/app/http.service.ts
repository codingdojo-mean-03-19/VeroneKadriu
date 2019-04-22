import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log("Hello");
    this.getPokemon(); }

  getPokemon(){
    
       let tempObservable = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/1/');
    
       tempObservable.subscribe(data => {
          console.log("Got our data! This pokemon has the following abilities:", data.abilities);
          for (const item of data.abilities){
            console.log(item.ability.name);
          }
          this.getCount(data.abilities[1].ability.url);
        });
    }

    getCount(url){
      let tempObservable = this._http.get<Count>(url)
      tempObservable.subscribe(data => {
   
        console.log(data.pokemon.length + "pokemon/s have the  " + data.name + " ability.");
      });
    };
}

interface PokeData {
  abilities: Array<Ability>
}

interface Ability {
  ability: {
    name: string,
    url: string
  }
}

interface Count {
  name: string,
  pokemon: Array<Pokemon>
}

interface Pokemon{
  length: number
}


