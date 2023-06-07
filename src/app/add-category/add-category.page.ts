import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage {

  catForm: FormGroup;
  message: string = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private categoryService: CategoryService, private router :Router)
  {
    this.catForm = this.formBuilder.group({
      name: ''
    });
  }



  onSubmit() {
    const name = this.catForm.get('name')?.value;
    const requestBody = {
      name
    };
    this.categoryService.addCategory(requestBody).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/categories']);

    });
  }
}
