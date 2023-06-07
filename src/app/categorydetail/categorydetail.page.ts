import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { DressService,Dress } from '../services/dress.service';
import { forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.page.html',
  styleUrls: ['./categorydetail.page.scss'],
})
export class CategorydetailPage implements OnInit {

  category: any;
  dressIds: any;
  dress: any;
  dresses: Dress[] = [];
  dressNames: { [key: string]: string } = {};

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private dressService: DressService

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idcategory');
    if (id) {
      this.getCategoryById(id);
      this.getDressIdsByCategoryId(id);
    }
  }
  getCategoryById(id: string): void {
    this.categoryService.getCategoryById(id)
      .subscribe(response => {
        this.category = response;
      });
  }

  getDressIdsByCategoryId(id: string): void {
    this.categoryService.getDressIdsByCategoryId(id)
      .subscribe(response => {
        this.dressIds = response.dressIds;
        console.log('dressIds:', this.dressIds);
  
        this.dressIds.forEach((dressId: string) => {
          this.dressService.getDressById(dressId)
            .subscribe(dress => {
              this.dressNames[dressId] = dress.name;
            });
        });
      });
  }
  

  getDressNameById(dressId: string): string {
    const dress = this.dresses.find(d => d.iddress === Number(dressId));
    return dress ? dress.name : 'Nom inconnu';
  }
  

}
