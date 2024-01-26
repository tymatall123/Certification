import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCommantaireComponent } from './gestion-commantaire.component';

describe('GestionCommantaireComponent', () => {
  let component: GestionCommantaireComponent;
  let fixture: ComponentFixture<GestionCommantaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCommantaireComponent]
    });
    fixture = TestBed.createComponent(GestionCommantaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
