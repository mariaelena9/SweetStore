import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDulcesComponent } from './list-dulces.component';

describe('ListDulcesComponent', () => {
  let component: ListDulcesComponent;
  let fixture: ComponentFixture<ListDulcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDulcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
