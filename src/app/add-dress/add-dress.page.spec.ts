import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDressPage } from './add-dress.page';

describe('AddDressPage', () => {
  let component: AddDressPage;
  let fixture: ComponentFixture<AddDressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddDressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
