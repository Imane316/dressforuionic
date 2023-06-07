import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorydetailPage } from './categorydetail.page';

describe('CategorydetailPage', () => {
  let component: CategorydetailPage;
  let fixture: ComponentFixture<CategorydetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategorydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
