import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegimeComponent } from './page-regime.component';

describe('PageRegimeComponent', () => {
  let component: PageRegimeComponent;
  let fixture: ComponentFixture<PageRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRegimeComponent]
    });
    fixture = TestBed.createComponent(PageRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
