import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatedressPage } from './updatedress.page';

describe('UpdatedressPage', () => {
  let component: UpdatedressPage;
  let fixture: ComponentFixture<UpdatedressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatedressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
