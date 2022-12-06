import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';
import { Error, ErrorResponse } from 'src/app/models/errors';
import { environment } from 'src/environments/environment.prod';
import {
  ApiPokemonResponse,
  Pokemon,
  PokemonPagination,
} from '../../models/pokemon';
import { ErrorService } from '../error/error.service';
import { LocalStorageService } from '../localStorage/local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public pokemons: Pokemon[] = [];
  private url = `${environment.appUrl}api/pokemon`;
  private limitPerPage = 50;
  constructor(
    private http: HttpClient,
    private error: ErrorService,
    private localStorage: LocalStorageService
  ) {}

  async getPokemons(page: number): Promise<Pokemon[]> {
    try {
      const params = new HttpParams({
        fromObject: { page, limit: this.limitPerPage },
      });
      const response = (await firstValueFrom(
        this.http.get(this.url, { params })
      )) as ApiPokemonResponse;
      this.pokemons = response.pokemons;
      return this.pokemons;
    } catch (err) {
      this.error.handleError(err as ErrorResponse);
      return [];
    }
  }

  async addPokemon(pokemon: any): Promise<Response | undefined> {
    try {
      const response = (await firstValueFrom(
        this.http.post(this.url, { ...pokemon })
      )) as Response;
      return response;
    } catch (err) {
      console.log(err);
      this.error.handleError(err as ErrorResponse);
      return undefined;
    }
  }
  async delete(id: string): Promise<Response | undefined> {
    try {
      const deleteUrl = `${this.url}/delete/${id}`;
      const response = (await firstValueFrom(
        this.http.delete(this.url)
      )) as Response;
      return response;
    } catch (err) {
      console.log(err);
      this.error.handleError(err as ErrorResponse);
      return undefined;
    }
  }
}
