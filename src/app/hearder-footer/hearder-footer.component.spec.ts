import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderFooterComponent } from './hearder-footer.component';

describe('HearderFooterComponent', () => {
  let component: HearderFooterComponent;
  let fixture: ComponentFixture<HearderFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HearderFooterComponent]
    });
    fixture = TestBed.createComponent(HearderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
