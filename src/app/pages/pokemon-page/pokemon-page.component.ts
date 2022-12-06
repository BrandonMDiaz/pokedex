import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  agregar() {
    this.router.navigateByUrl('pokemones/add');
  }
}
