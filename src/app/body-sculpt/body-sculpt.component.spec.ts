import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySculptComponent } from './body-sculpt.component';

describe('BodySculptComponent', () => {
  let component: BodySculptComponent;
  let fixture: ComponentFixture<BodySculptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySculptComponent]
    });
    fixture = TestBed.createComponent(BodySculptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
