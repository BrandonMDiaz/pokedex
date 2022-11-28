import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pokemonBackground]'
})
export class BackgroundDirective implements OnInit{
  @Input() pokemonBackground: string = '';
  backgroundColors: any = {
    normal: '#a8a878',
    fire: '#f08030',
    water: '#698ee9',
    grass: '#78c850',
    electric: '#f8d030',
    ice: '#98d8d8',
    fighting: '#c03028',
    poison: '#a040a0',
    ground: '#e0c068',
    bug: '#a8b820'
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    console.log('background directive: OnInit')
    this.el.nativeElement.style.backgroundColor = this.backgroundColors[this.pokemonBackground.toLowerCase()];
  }

}
