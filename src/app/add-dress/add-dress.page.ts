import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DressService } from '../services/dress.service';

@Component({
  selector: 'app-add-dress',
  templateUrl: './add-dress.page.html',
  styleUrls: ['./add-dress.page.scss'],
})
export class AddDressPage   {
  dressForm: FormGroup;
  message: string = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dressService: DressService,private router: Router)
  {
    this.dressForm = this.formBuilder.group({
      // Définis ici les champs du formulaire pour la robe
      name: '',
      picture:'',
      price: '',
      material: '',
      size: ''
    });
  }

  sendForm() {
    const name = this.dressForm.get('name')?.value;
    const picture = this.dressForm.get('picture')?.value;
    const price = this.dressForm.get('price')?.value;
    const material = this.dressForm.get('material')?.value;
    const size= this.dressForm.get('size')?.value;
    const requestBody = {
      name,
      picture,
      price,
      material,
      size
      
    };
    this.dressService.addDress(requestBody).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/dresses']);
    });
  }

}
