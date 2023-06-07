import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.page.html',
  styleUrls: ['./updatecategory.page.scss'],
})
export class UpdatecategoryPage implements OnInit {

  catForm: FormGroup;
  idcategory: string = '';
  
  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.catForm = new FormGroup({
      name: new FormControl('')
    });
  }
  
  ngOnInit(): void {
    this.idcategory = this.route.snapshot.params['idcategory'];
    this.categoryService.getCategoryById(this.idcategory).subscribe((data: any) => {
      this.catForm.setValue({
        name: data.name
      });
    });
  }
  
  sendForm() {
    const name = this.catForm.get('name')?.value;
  
    const requestBody = {
      name
    };
  
    this.categoryService.updateCategory(this.idcategory, requestBody).subscribe((data: any) => {
      console.log(data);
      this.catForm.reset();
      this.router.navigate(['/categories']);
    });
  }

}
