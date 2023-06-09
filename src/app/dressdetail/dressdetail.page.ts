import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DressService } from '../services/dress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dressdetail',
  templateUrl: './dressdetail.page.html',
  styleUrls: ['./dressdetail.page.scss'],
})
export class DressdetailPage implements OnInit {

  dress: any;

  constructor(
    private route: ActivatedRoute,
    private dressService: DressService,
    private router : Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('iddress');
    if (id) {
      this.getDressById(id);
      console.log('id:',id);
    }
  }

  getDressById(id: string): void {
    this.dressService.getDressById(id)
      .subscribe(response => {
        this.dress = response;
        console.log(this.dress);
        this.router.navigate(['/dressdetail/', id ]);

      });
}
}