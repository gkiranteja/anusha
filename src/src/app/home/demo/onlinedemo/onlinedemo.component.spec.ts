import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinedemoComponent } from './onlinedemo.component';

describe('OnlinedemoComponent', () => {
  let component: OnlinedemoComponent;
  let fixture: ComponentFixture<OnlinedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
