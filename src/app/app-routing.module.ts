import { NgModule } from '@angular/core';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemons/0", redirectTo: "pokemons" },
  { 
    path: "pokemons/:page",
    component: PokemonListComponent,
    pathMatch: "full"
  },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  {
    path: "pokemons/details/:pokemonName",
    component: PokemonDetailsCardComponent
  },
  { path: "**", redirectTo: "pokemons", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
