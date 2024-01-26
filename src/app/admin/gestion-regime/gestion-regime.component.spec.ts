import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegimeComponent } from './gestion-regime.component';

describe('GestionRegimeComponent', () => {
  let component: GestionRegimeComponent;
  let fixture: ComponentFixture<GestionRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRegimeComponent]
    });
    fixture = TestBed.createComponent(GestionRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
