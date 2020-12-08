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
  isLoading = false;

  defaultImageSrc = '../../assets/pokeball.png';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.httpClient.get<any>(this.cardData.url).subscribe(response => {
      this.pokemon = {
        name: response.name,
        type: response.types[0].type.name,
        polishType: this.translateTypeName(
          response.types[0].type.name
        ),
        imageUrl: response.sprites.front_default
      };
    });
  }

  imageLoaded() { this.isLoading = false; }

  translateTypeName(type: string): string {
    switch (type) {
      case 'normal':
        return 'normalny';
      case 'fire':
        return 'ognisty';
      case 'water':
        return 'wodny';
      case 'electric':
        return 'elektryczny';
      case 'grass':
        return 'trawiasty';
      case 'ice':
        return 'lodowy';
      case 'fighting':
        return 'walczący';
      case 'poison':
        return 'trujący';
      case 'ground':
        return 'ziemnisty';
      case 'flying':
        return 'latający';
      case 'psychic':
        return 'psychiczny';
      case 'bug':
        return 'owadowy';
      case 'rock':
        return 'skalny';
      case 'ghost':
        return 'duchowy';
      case 'dragon':
        return 'smoczy';
      case 'dark':
        return 'mroczny';
      case 'steel':
        return 'stalowy';
      case 'fairy':
        return 'baśniowy';
      default:
        return 'typ nieobsługiwany';
    }
  }

}
