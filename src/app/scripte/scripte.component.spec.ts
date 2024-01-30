import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScripteComponent } from './scripte.component';

describe('ScripteComponent', () => {
  let component: ScripteComponent;
  let fixture: ComponentFixture<ScripteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScripteComponent]
    });
    fixture = TestBed.createComponent(ScripteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
