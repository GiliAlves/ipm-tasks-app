import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanticosItemComponent } from './canticos-item.component';

describe('CanticosItemComponent', () => {
  let component: CanticosItemComponent;
  let fixture: ComponentFixture<CanticosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanticosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanticosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
