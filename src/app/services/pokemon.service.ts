import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pokemon, PokemonPagination } from '../models/pokemon';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];

  private url = 'https://pokeapi.co/api/v2/pokemon/';
  private url2 = 'http://localhost:3000/api/pokemon/';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getPokemons2(page: number) {
    this.http
      .get(this.url2)
      .pipe(
        catchError((err) => {
          let message: string = '';
          if (err.status === 500) {
            this.localStorage.delete(environment.jwtKey);
            message = 'Your session has expired';
          } else {
            message = 'please try again later';
          }
          return throwError(() => new Error(message));
        })
      )
      .subscribe((data) => {
        this.pokemons = data as Pokemon[];
      });
  }
  setPokemons(page: number) {
    const itemsPerPage = 5;
    const pagination = (page - 1) * itemsPerPage;
    const completeUrl = `${this.url}?limit=${itemsPerPage}&offset=${pagination}`;
    this.http.get(completeUrl).subscribe((data: any) => {
      data.results.forEach((element: any) => {
        const pokemonUrlArray: string[] = [];
        pokemonUrlArray.push(element.url);
        pokemonUrlArray.forEach((url) => {
          this.http.get(url).subscribe((data) => {
            this.pokemons.push(data as Pokemon);
          });
        });
      });
    });
  }
}
