import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailsCardComponent } from './pokemon-details-card/pokemon-details-card.component';
import { PokemonSearchFormComponent } from './pokemon-search-form/pokemon-search-form.component';
import { UrlSerializer } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsCardComponent,
    PokemonSearchFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [{
    provide:UrlSerializer,
    useClass:LowerCaseUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
