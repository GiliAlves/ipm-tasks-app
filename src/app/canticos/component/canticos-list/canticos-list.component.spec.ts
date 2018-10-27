import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanticosListComponent } from './canticos-list.component';

describe('CanticosListComponent', () => {
  let component: CanticosListComponent;
  let fixture: ComponentFixture<CanticosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanticosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanticosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
