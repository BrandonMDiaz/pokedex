import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonFormat } from './shared/pipes/pokemon';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { BackgroundDirective } from './shared/directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonFormat,
    BackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
