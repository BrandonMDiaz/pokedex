import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pages: number;

  constructor() {
    this.pages = 100;
  }

  ngOnInit(): void {
  }

}
