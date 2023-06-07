import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-dressdetail',
  templateUrl: './dressdetail.page.html',
  styleUrls: ['./dressdetail.page.scss'],
})
export class DressdetailPage implements OnInit {
  dress: any;

  constructor(
    private route: ActivatedRoute,
    private dressService: DressService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('iddress');
    if (id) {
      this.getDressById(id);
    }
    
  }

  getDressById(id: string): void {
    this.dressService.getDressById(id)
      .subscribe(response => {
        this.dress = response;
        console.log(this.dress);
        const dressName = this.dress.name; // Obtenir uniquement le nom de la robe
      console.log(dressName); // Afficher le nom de la robe dans la console
      });
  }

}
