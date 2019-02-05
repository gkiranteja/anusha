import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpocComponent } from './requestpoc.component';

describe('RequestpocComponent', () => {
  let component: RequestpocComponent;
  let fixture: ComponentFixture<RequestpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
