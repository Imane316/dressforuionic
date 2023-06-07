import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DressdetailPage } from './dressdetail.page';

describe('DressdetailPage', () => {
  let component: DressdetailPage;
  let fixture: ComponentFixture<DressdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DressdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
