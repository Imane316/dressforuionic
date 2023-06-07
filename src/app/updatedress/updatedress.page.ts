import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DressService } from '../services/dress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatedress',
  templateUrl: './updatedress.page.html',
  styleUrls: ['./updatedress.page.scss'],
})
export class UpdatedressPage implements OnInit {


  dressForm: FormGroup;
  iddress: string = '';
  
  constructor(private route: ActivatedRoute, private dressService: DressService, private router: Router) {
  this.dressForm = new FormGroup({
  name: new FormControl(''),
  picture: new FormControl(''),
  price: new FormControl(''),
  material: new FormControl(''),
  size: new FormControl('')
  });
  }
  
  ngOnInit(): void {
  this.iddress = this.route.snapshot.params['iddress'];
  this.dressService.getDressById(this.iddress).subscribe((data: any) => {
  this.dressForm.setValue({
  name: data.name,
  picture: data.picture,
  price: data.price,
  material: data.material,
  size: data.size
  });
  });
  }
  
  sendForm() {
  const name = this.dressForm.get('name')?.value;
  const picture = this.dressForm.get('picture')?.value;
  const price = this.dressForm.get('price')?.value;
  const material = this.dressForm.get('material')?.value;
  const size = this.dressForm.get('size')?.value;
  
  const requestBody = {
    name,
    picture,
    price,
    material,
    size,
   
  };
  
  this.dressService.updateDress(this.iddress, requestBody).subscribe((data: any) => {
    console.log(data);
    this.dressForm.reset();
    this.router.navigate(['/dresses']);
  });
  }

}
