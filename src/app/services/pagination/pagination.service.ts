import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private page: number = 1;
  private totalPages: number = 0
  constructor() { }

  currentPage(){
    return this.page;
  }

  nextPage(){
    this.page += 1;
    return this.page
  }

  prevPage(){
    this.page -= 1;
    return this.page
  }
  setTotalPages(total: number) {
    this.totalPages = total;
  }

  getTotalPages(){
    return this.totalPages;
  }
}
