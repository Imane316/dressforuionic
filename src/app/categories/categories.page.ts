import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: any[] = [];


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(response => {
        this.categories = response;
      });
  }
  deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id)
      .subscribe(() => {
        // Suppression réussie, mettez à jour la liste des catégories
        this.getCategories();
      });

}

}
