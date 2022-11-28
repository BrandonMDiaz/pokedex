import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonFormat } from './shared/pipes/pokemon';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BackgroundDirective } from './shared/directives/background.directive';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonWeightPipe } from './shared/pipes/pokemon-weight.pipe';
import { PokemonHeightPipe } from './shared/pipes/pokemon-height.pipe';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonFormat,
    BackgroundDirective,
    LoginComponent,
    NavbarComponent,
    PaginationComponent,
    PokemonPageComponent,
    PokemonWeightPipe,
    PokemonHeightPipe,
    AddPokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
