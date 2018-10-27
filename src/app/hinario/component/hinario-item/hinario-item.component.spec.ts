import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinarioItemComponent } from './hinario-item.component';

describe('HinarioItemComponent', () => {
  let component: HinarioItemComponent;
  let fixture: ComponentFixture<HinarioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinarioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinarioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
