import { Component, OnInit } from '@angular/core';
import { DressService } from   '../services/dress.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.page.html',
  styleUrls: ['./dress-list.page.scss'],
})
export class DressListPage implements OnInit {

  dresses: any[] = [];
  
  constructor(private dressService: DressService,private navCtrl: NavController,private router : Router) { }

  ngOnInit(): void {
    this.getDresses();
  }

  getDresses(): void {
    this.dressService.getDresses()
      .subscribe(response => {
        this.dresses = response;
      });
  }
  deleteDress(id: string): void {
    this.dressService.deleteDress(id)
      .subscribe(() => {
        this.getDresses();
      });
  }
  goDressDetail(id: string):void{
    this.router.navigate(['/dressdetail/',id]);
  }

}
