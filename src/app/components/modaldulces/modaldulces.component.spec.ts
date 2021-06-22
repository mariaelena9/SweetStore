import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldulcesComponent } from './modaldulces.component';

describe('ModaldulcesComponent', () => {
  let component: ModaldulcesComponent;
  let fixture: ComponentFixture<ModaldulcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldulcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
