import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonCard } from './pokemon-card.model';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  cardData: PokemonCard;

  pokemon: Pokemon;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>(this.cardData.url).subscribe(response => {
      this.pokemon = {
        name: response.name,
        type: response.types[0].type.name,
        imageUrl: response.sprites.front_default
      };
    });
  }
}
