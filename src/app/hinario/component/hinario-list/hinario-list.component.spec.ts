import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinarioListComponent } from './hinario-list.component';

describe('HinarioListComponent', () => {
  let component: HinarioListComponent;
  let fixture: ComponentFixture<HinarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
