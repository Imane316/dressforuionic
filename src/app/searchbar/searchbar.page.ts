import { Component , OnInit } from '@angular/core';
import { DressService } from '../services/dress.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  searchTerm: string = '';
  dress: any;

  constructor(   private dressService: DressService) { }

  ngOnInit(): void {
      this.search();
    
  }

  search(): void {
    this.dressService.getDressByName(this.searchTerm)
      .subscribe((response) => {

        this.dress = response;
        console.log(this.dress);
      });
  }
}
