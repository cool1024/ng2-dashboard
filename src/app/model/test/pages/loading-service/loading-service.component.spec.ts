import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingServiceComponent } from './loading-service.component';

describe('LoadingServiceComponent', () => {
  let component: LoadingServiceComponent;
  let fixture: ComponentFixture<LoadingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
