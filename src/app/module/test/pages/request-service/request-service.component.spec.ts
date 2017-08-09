import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestServiceComponent } from './request-service.component';

describe('RequestServiceComponent', () => {
  let component: RequestServiceComponent;
  let fixture: ComponentFixture<RequestServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
