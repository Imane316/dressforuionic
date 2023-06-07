import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DressListPage } from './dress-list.page';

describe('DressListPage', () => {
  let component: DressListPage;
  let fixture: ComponentFixture<DressListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DressListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
