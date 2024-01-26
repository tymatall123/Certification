import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProposComponent } from './page-propos.component';

describe('PageProposComponent', () => {
  let component: PageProposComponent;
  let fixture: ComponentFixture<PageProposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProposComponent]
    });
    fixture = TestBed.createComponent(PageProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
